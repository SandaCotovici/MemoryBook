import { RouterModule, Routes } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditorComponent } from './editor/editor.component';

export const router: Routes = [

  { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: 'editor', component: EditorComponent },
  { path: '**', component: DashboardComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
