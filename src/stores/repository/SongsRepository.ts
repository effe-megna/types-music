import { ISong, IAlbum, INetTrack } from "../../types/index"

export default class SongsRepository {

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

}

  // resolve({
  //   title: "Nightcall",
  //   artwork: "https://i.scdn.co/image/c8981e841b25a63b0808a51d3cf9c41da8a3ace8",
  //   artist: "Kavinsky",
  //   songs: [
  //     {
  //       title: "Nightcall",
  //       url: "https://i.scdn.co/image/c8981e841b25a63b0808a51d3cf9c41da8a3ace8",
  //       artist: "Kavinsky"
  //     },
  //     {
  //       title: "Pacific Coast Highway",
  //       url: "https://i.scdn.co/image/c8981e841b25a63b0808a51d3cf9c41da8a3ace8",
  //       artist: "Kavinsky"
  //     },
  //     {
  //       title: "Service out",
  //       url: "https://i.scdn.co/image/c8981e841b25a63b0808a51d3cf9c41da8a3ace8",
  //       artist: "Kavinsky"
  //     }
  //   ]
  // })