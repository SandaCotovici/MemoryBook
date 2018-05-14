import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routes } from './app.router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ImageUploadModule } from 'angular2-image-upload';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditorModule } from './editor/editor.module';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    routes,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    ImageUploadModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    DashboardModule,
    EditorModule
  ],
  providers   : [],
  bootstrap   : [ AppComponent ]
})


export class AppModule {
}
