import { INetAlbum } from './../../types/index';
import { observable, decorate } from 'mobx';
import { IAlbum } from 'src/types';
import SongsRepository from '../repository/SongsRepository';

export default class LibraryUI {

  public currentAlbumInUI?: IAlbum = undefined

  public currentAlbumsPerArtistInUI: INetAlbum[] = []

  public albums: INetAlbum[] = []

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

  public loadAlbumsPerArtist = async (name: string) => {
    try {
      this.currentAlbumsPerArtistInUI = await this.songsRepository.fetchAlbumsByArtist(name)
    } catch (error) {
      throw new Error(error)
    }
  }

  public loadAlbums = async () => {
    try {
      this.albums = await this.songsRepository.fetchAlbums()
    } catch (error) {
      throw new Error(error)
    }
  }
  
}

decorate(LibraryUI, {
  currentAlbumInUI: observable,
  currentAlbumsPerArtistInUI: observable,
  albums: observable
})