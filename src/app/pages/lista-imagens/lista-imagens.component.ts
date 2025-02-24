import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photos } from 'src/app/models/photos.models';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-lista-imagens',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './lista-imagens.component.html',
  styleUrl: './lista-imagens.component.scss'
})
export class ListaImagensComponent implements OnInit {
  photos: Photos[] = [];  
  album: any;

  constructor(  private router:Router, private photoService: PhotoService) {
    
    var nav = this.router.getCurrentNavigation();   
    this.album = nav?.extras.state;    
    this.photoService.obterPhotosByAlbum(this.album.id)
      .subscribe(response => this.photos = response)
  }

  ngOnInit(): void {
      
  } 

  voltar() {
    this.router.navigate(['/principal']);
  }

}
