import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PhotosService } from '../../services/photos.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos$: Observable<Photo>;
  
  constructor(private photoService: PhotosService) { }

  ngOnInit() {
    this.photos$ = this.photoService.getPhotos().map(data => data.photos);
  }

}
