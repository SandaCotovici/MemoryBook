import { Component, OnInit } from '@angular/core';

import { PhotosService } from '../../../shared/services/photos.service';

@Component({
  selector: 'app-image-collection',
  templateUrl: './image-collection.component.html',
  styleUrls: ['./image-collection.component.css']
})
export class ImageCollectionComponent implements OnInit {

  endpointUrl: string;
  
  constructor(private photoService: PhotosService) { }

  ngOnInit() {
    this.endpointUrl = PhotosService.endpointUrl + 'add';
  }
  
  addPhoto() {
    this.photoService.addPhoto();
  }

}
