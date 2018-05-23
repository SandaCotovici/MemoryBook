import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class PhotosService {

  static endpointUrl;

  constructor(private dataService: DataService) {
    PhotosService.endpointUrl = DataService.Endpoints.photos;
  }

  addPhoto() {
    this.dataService.addPhoto();
  }

  getPhotos() {
    return this.dataService.getPhotos().map(data => data.photos);
  }

}
