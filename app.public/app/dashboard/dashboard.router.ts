import { RouterModule, Routes } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { MemoriesComponent } from './albums/components/memories/memories.component';
import {PricingComponent} from './pricing/pricing.component';
import {OrdersComponent} from './albums/components/orders/orders.component';
import {ProfileComponent} from './albums/components/profile/profile.component';
import {UserManualComponent} from './albums/components/user-manual/user-manual.component';
import {MemoriesCreateComponent} from './albums/components/memories-create/memories-create.component';
import {PhotosComponent} from './albums/components/photos/photos.component';


export const router: Routes = [
  { path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'albums',
        component: AlbumsComponent,
        children: [
          { path: '', redirectTo: 'memories', pathMatch: 'full' },
          { path: 'memories', component: MemoriesComponent },
          { path: 'photos', component: PhotosComponent },
          { path: 'orders', component: OrdersComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'userManual', component: UserManualComponent }
        ]},
      { path: 'pricing', component: PricingComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]
  }
];

export class Dashboard {
  static readonly ROUTES: ModuleWithProviders = RouterModule.forChild(router);
}
