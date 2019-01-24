import LibraryStore from "./domain/LibraryStore"
import SongsRepository from "./repository/SongsRepository"
import LibraryUI from './ui/LibraryUi';
import ArtistsStore from './domain/ArtistsStore';
import ArtistsRepository from './repository/ArtistsRepository';

const songsRepository = new SongsRepository()
const artistsRepository = new ArtistsRepository()

const libraryStore = new LibraryStore(songsRepository)
const artistsStore = new ArtistsStore(artistsRepository)

const libraryUI = new LibraryUI(songsRepository)

export const stores = {
  libraryStore,
  artistsStore,
  libraryUI
}