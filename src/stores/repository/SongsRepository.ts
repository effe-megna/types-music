import { ISong, IAlbum, INetTrack, INetAlbum } from "../../types/index"

interface IAlbumsPerArtist {
  artist: string,
  albums: INetAlbum[]
}

export default class SongsRepository {

  private albumsPerArtist: IAlbumsPerArtist[] = []

  public fetchRecentlyPlayed = (): Promise<ISong[]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([{
          title: "Hurry up Were Dreaming",
          artist: "M83",
          url: "http://tannerv.ddns.net:12345/SpotiReact/files/music/M83/Hurry Up Were Dreaming/Artwork.png"
        }, {
          title: "1989 (Deluxe)",
          artist: "Taylor Swift",
          url: "http://tannerv.ddns.net:12345/SpotiReact/files/music/Taylor Swift/1989 (Deluxe)/Artwork.png"
        }, {
          title: "Bad Blood",
          artist: "Bastille",
          url: "http://tannerv.ddns.net:12345/SpotiReact/files/music/Bastille/Bad Blood/Artwork.png"
        }])
      }, 200);
    })
  }

  public fetchAlbumByTitle(title: string): Promise<IAlbum> {
    return new Promise((resolve, reject) => {
      fetch(`http://tannerv.ddns.net:3000/api/album/${title}`)
        .then(res => res.json())
        .then((res: INetTrack[]) => {

          const album: IAlbum = {
            title: res[0].album,
            artist: res[0].artist,
            artwork: "http://tannerv.ddns.net:12345/SpotiFree/" + res[0].artwork,
            songs: res.map(t => ({
              title: t.name,
              artist: t.artist,
              url: t.artwork
            }))
          }

          resolve(album)
        })
        .catch(err => reject(err))
    })
  }

  public fetchAlbumsByArtist(name: string): Promise<INetAlbum[]> {
    return new Promise((resolve, reject) => {

      const inMemory = this.albumsPerArtist.find(x => x.artist === name)

      if (inMemory) { resolve(inMemory.albums) }

      fetch(`http://tannerv.ddns.net:3000/api/artist/${name}`)
        .then(res => res.json())
        .then((res: INetAlbum[]) => {

          const albums = res.map(x => ({
            ...x,
            artwork: "http://tannerv.ddns.net:12345/SpotiFree/" + x.artwork
          }))

          this.albumsPerArtist.push({
            artist: name,
            albums
          })

          resolve(albums)
        })
        .catch(err => reject(err))
    })
  }

  public fetchAlbums(): Promise<INetAlbum[]> {
    return new Promise((resolve, reject) => {
      fetch("http://tannerv.ddns.net:3000/api/albums")
        .then(res => res.json())
        .then((res: INetAlbum[]) => {

          const albums = res.map(x => ({
            ...x,
            artwork: "http://tannerv.ddns.net:12345/SpotiFree/" + x.artwork
          }))

          resolve(albums)
        })
        .catch(err => reject(err))
    })
  }
}
