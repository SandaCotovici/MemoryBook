import { RouterModule, Routes } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { MemoriesComponent } from './albums/components/memories/memories.component';


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
          { path: 'photos', component: AboutComponent }
        ]},
      { path: 'about', component: AboutComponent }
    ]
  }
];

export class Dashboard {
  static readonly ROUTES: ModuleWithProviders = RouterModule.forChild(router);
}
