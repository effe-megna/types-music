import LibraryStore from "./domain/LibraryStore"
import SongsRepostiroy from "./repository/SongsRepository"
import LibraryUI from './ui/LibraryUi';

const songsRepository = new SongsRepostiroy()
const libraryStore = new LibraryStore(songsRepository)
const libraryUI = new LibraryUI(songsRepository)

export const stores = {
  libraryStore,
  libraryUI
}