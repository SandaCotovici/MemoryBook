import { Component } from '@angular/core';
// import {ROUTER_CONFIGURATION, ROUTER_DIRECTIVES, RouteConfig} from '@angular/router';
import {AlbumComponent} from './content/album/album.component';
import {PhotoCollectionComponent} from './content/photo-collection/photo-collection.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // directives: [ROUTER_DIRECTIVES]
})


// @RouteConfig([
//   { path: '/contact', name: 'Album', component: AlbumComponent,   useAsDefault:true },
//   { path: '/new',   name: 'Orders' , component: AlbumComponent},
//   { path: '/new/:lastName', name: 'UserManual', component: AlbumComponent },
//   { path: '/new/:lastName', name: 'Profile', component: AlbumComponent },
//   { path: '/new/:lastName', name: 'PhotoCollection', component: PhotoCollectionComponent },
// ])
export class AppComponent {
  title = 'app';
}
