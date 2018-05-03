import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { AlbumComponent } from './content/album/album.component';
import { PhotoCollectionComponent } from './content/photo-collection/photo-collection.component';

const appRoutes: Routes = [
  { path: 'album', component: AlbumComponent},
  { path: 'orders' , component: AlbumComponent},
  { path: 'userManual', component: AlbumComponent },
  { path: 'profile', component: AlbumComponent },
  { path: 'photoCollection', component: PhotoCollectionComponent },
  { path: '',
    redirectTo: '/album',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    AlbumComponent,
    PhotoCollectionComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
