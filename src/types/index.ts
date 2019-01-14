export interface ISong {
  title: string,
  artist: string,
  url: string
}

export interface IAlbum {
  title: string,
  artist: string,
  artwork: string,
  songs: ISong[]
}

export interface INetTrack {
  name: string;
  artist: string;
  album: string;
  track: number;
  url: string;
  artwork: string;
}