import { observable, decorate } from "mobx"

import { ISong } from "../../types/index"
import SongsRepository from '../repository/SongsRepository';

export default class LibraryStore {

  public recentlyPlayed: ISong[] = []

  protected songsRepository: SongsRepository

  constructor(songsRepository: SongsRepository) {
    this.songsRepository = songsRepository

    this.loadSongsRencetlyPlayed()
  }

  public loadSongsRencetlyPlayed = async () => {
    try {
      const songs = await this.songsRepository.fetchRecentlyPlayed()

      this.recentlyPlayed = songs 
    } catch (error) {
      throw new Error(error);
    }
  } 
}

decorate(LibraryStore, {
  recentlyPlayed: observable
})

