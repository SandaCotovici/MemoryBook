import {Component, OnInit} from '@angular/core';
import {PhotosService} from '../../services/photos.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos$: Observable<any>;

  constructor(private photoService: PhotosService) {
  }

  ngOnInit() {
    this.photos$ = this.photoService.getPhotos();
  }

}
