import { INetArtist } from './../../types/index';

export default class ArtistsRepository {

  public fetchArtists = (): Promise<INetArtist[]> => {
    return new Promise((resolve, reject) => {
      fetch("http://tannerv.ddns.net:3000/api/artists")
        .then(res => res.json())
        .then((res: INetArtist[]) => {
          resolve(res)
        })
        .catch((err) => reject(err))
    })
  }

}