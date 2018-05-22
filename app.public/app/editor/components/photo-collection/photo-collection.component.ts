import { Component, OnInit } from '@angular/core';

import { PhotosService } from '../../../shared/services/photos.service';

@Component({
  selector: 'app-photo-collection',
  templateUrl: './photo-collection.component.html',
  styleUrls: ['./photo-collection.component.css']
})
export class PhotoCollectionComponent implements OnInit {

  endpointUrl: string;
  
  constructor(private photoService: PhotosService) { }

  ngOnInit() {
    this.endpointUrl = PhotosService.endpointUrl + 'add';
  }

}
