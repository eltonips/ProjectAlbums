import { Album } from "./album.models";
import { Photos } from "./photos.models";

export interface AlbumPhoto { 
    album: Album,
    photo: Photos
  }  