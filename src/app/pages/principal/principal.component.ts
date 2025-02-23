import { Component } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { CommonModule } from '@angular/common';
import { AlbumPhoto } from 'src/app/models/album-photo.models';
import { Album } from 'src/app/models/album.models';
import { PhotoService } from 'src/app/services/photo.service';
import { Photos } from 'src/app/models/photos.models';
import { Router } from '@angular/router';

export interface PeriodicElement {
  title: string;
}

@Component({
  selector: 'app-principal', 
  standalone: true, 
  imports: [
    CommonModule    
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {
  albums: Album[] = []
  photos: Photos[] = []
  albumPhotos: AlbumPhoto[] = []

  constructor(
    private albumService: AlbumService, 
    private photoService: PhotoService,
    private router: Router) {
    this.obterAlbumsCadastrados();    
  }

  obterAlbumsCadastrados() {
    this.albumService.obterAlbums()
      .subscribe(albums => {
        this.albums = albums;
        for(let album of albums) {
          this.photoService.obterPhotosByAlbum(album.id)
            .subscribe(photos => {
              if(this.photos != null){
                this.photos = photos
              }                            
              this.albumPhotos.push({
                album: album,
                photo: this.photos[0]
              })
            })
        }
        
      })
    
  }

  listaImagens(album: Album) {        
    this.router.navigate(['/listaImagens'],{
      state: album
    });
  }

}
