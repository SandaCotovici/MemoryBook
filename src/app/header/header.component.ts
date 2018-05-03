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

  // goProfile() {
  //   this._router.navigate(['Profile']);
  // }
  // goAlbums() {
  //   this._router.navigate(['Album']);
  // }
  // goUserManual() {
  //   this._router.navigate(['UserManual']);
  // }
  // goCollection() {
  //   this._router.navigate(['PhotoCollection']);
  // }
  // goOrders() {
  //   this._router.navigate(['Orders']);
  // }
  ngOnInit() {
  }

}
