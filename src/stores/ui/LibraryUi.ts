import { observable, decorate } from 'mobx';
import { IAlbum } from 'src/types';
import SongsRepository from '../repository/SongsRepository';

export default class LibraryUI {

  public currentAlbumInUI?: IAlbum

  protected songsRepository: SongsRepository

  constructor(songsRepository: SongsRepository) {
    this.songsRepository = songsRepository
  }

  public loadAlbumByTitle = async (title: string) => {
    try {
      this.currentAlbumInUI = await this.songsRepository.fetchAlbumByTitle(title)
    } catch (error) {
      throw new Error(error)
    }
  }
  
}

decorate(LibraryUI, {
  currentAlbumInUI: observable
})