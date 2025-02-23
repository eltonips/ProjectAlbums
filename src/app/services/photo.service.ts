import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photos } from "../models/photos.models";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private url = environment.api;

  constructor( private httpClient: HttpClient) {
    
  }

  obterPhotosByAlbum(albumId: string) {    
    return this.httpClient.get<Photos[]>(this.url + '/photos?albumId='+albumId)
  }
}