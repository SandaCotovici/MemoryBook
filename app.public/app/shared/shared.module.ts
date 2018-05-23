import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule, TabsModule } from 'ngx-bootstrap';

import { DataService } from './services/data.service';
import { PhotosService } from './services/photos.service';

import { CardListComponent } from './components/card-list/card-list.component';
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';
import { ImageUploadModule } from 'angular2-image-upload';
import {PhotoListComponent} from './components/photo-list/photo-list.component';


const COMPONENTS = [
  CardListComponent,
  PhotoUploadComponent,
  PhotoListComponent
];

@NgModule({
  imports     : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule,
    ButtonsModule,
    ImageUploadModule
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS,
  providers   : [ DataService, PhotosService ]
})
export class SharedModule {
}
