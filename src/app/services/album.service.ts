import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Album } from "../models/album.models";

@Injectable({
    providedIn: 'root'
})
export class AlbumService {

    private url = environment.api;

    constructor(private httpClient: HttpClient) {

    }

    obterAlbums() {
        return this.httpClient.get<Album[]>(this.url + '/albums');
    }
}