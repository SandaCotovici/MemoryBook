import { RouterModule, Routes } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { AlbumComponent } from './content/album/album.component';
import { PhotoCollectionComponent } from './content/photo-collection/photo-collection.component';


export const router: Routes = [
  { path: '', redirectTo: 'album', pathMatch: 'full'},
  { path: 'album', component: AlbumComponent},
  { path: 'orders' , component: AlbumComponent},
  { path: 'userManual', component: AlbumComponent },
  { path: 'profile', component: AlbumComponent },
  { path: 'photoCollection', component: PhotoCollectionComponent},
  { path: '**', component: AlbumComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
// export const routes: ModuleWithProviders =  RouterModule.forRoot(router, { enableTracing: true });
