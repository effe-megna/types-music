import { observable, decorate } from 'mobx';
import ArtistsRepository from '../repository/ArtistsRepository';
import { INetArtist } from 'src/types';

export default class ArtistsStore {

  public artists: INetArtist[] = []

  protected artistsRepository: ArtistsRepository
  
  constructor(artistsRepository: ArtistsRepository) {
    this.artistsRepository = artistsRepository
  }

  public loadArtists = async () => {
    try {
      this.artists = await this.artistsRepository.fetchArtists()
    } catch (error) {
      throw new Error(error)
    }
  }

}

decorate(ArtistsStore, {
  artists: observable
})