import { Component, OnInit } from '@angular/core';
import {Router, Routes, RouterModule} from '@angular/router';
import {PhotoCollectionComponent} from '../content/photo-collection/photo-collection.component';
import {AlbumComponent} from '../content/album/album.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}
