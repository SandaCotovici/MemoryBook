import { RouterModule, Routes } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { AlbumComponent } from './content/album/album.component';
import { PhotoCollectionComponent } from './content/photo-collection/photo-collection.component';
import {OrdersComponent} from './content/orders/orders.component';
import {UserManualComponent} from './content/user-manual/user-manual.component';
import {ProfileComponent} from './content/profile/profile.component';
import {PricingComponent} from './pricing/pricing.component';
import {AboutComponent} from './about/about.component';


export const router: Routes = [
  { path: '', redirectTo: 'album', pathMatch: 'full'},
  { path: 'album', component: AlbumComponent},
  { path: 'orders' , component: OrdersComponent},
  { path: 'userManual', component: UserManualComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'photoCollection', component: PhotoCollectionComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: AlbumComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
// export const routes: ModuleWithProviders =  RouterModule.forRoot(router, { enableTracing: true });
