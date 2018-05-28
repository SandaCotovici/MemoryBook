import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './albums/components/menu/menu.component';
import { DashboardSharedModule } from './shared/dashboard-shared.module';
import { AlbumsModule } from './albums/albums.module';
import { Dashboard } from './dashboard.router';
import { DashboardComponent } from './dashboard.component';
import { AlbumsComponent } from './albums/albums.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LogoutComponent } from './auth/logout/logout.component';
import {PricingComponent} from "./pricing/pricing.component";


@NgModule({
  imports     : [
    CommonModule,
    CarouselModule,
    DashboardSharedModule,
    AlbumsModule,
    Dashboard.ROUTES,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    LogoutComponent,
    MenuComponent,
    AboutComponent,
    HomeComponent,
    AlbumsComponent,
    PricingComponent,
 /* ContentComponent,
    AlbumComponent,
    PhotoCollectionComponent,
    ProfileComponent,
    UserManualComponent,
    OrdersComponent,
    PricingComponent, */
  ],
  providers   : [],
})
export class DashboardModule {
}
