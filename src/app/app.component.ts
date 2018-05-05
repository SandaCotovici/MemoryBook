import { Component } from '@angular/core';

import {AlbumComponent} from './content/album/album.component';
import {PhotoCollectionComponent} from './content/photo-collection/photo-collection.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'app';
}
