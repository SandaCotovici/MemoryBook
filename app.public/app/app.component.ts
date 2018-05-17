import { Component, OnInit } from '@angular/core';

import {AlbumComponent} from './dashboard/content/album/album.component';
import {PhotoCollectionComponent} from './dashboard/content/photo-collection/photo-collection.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  title = 'app';
  
  ngOnInit() {
  
  
  
  }
}
