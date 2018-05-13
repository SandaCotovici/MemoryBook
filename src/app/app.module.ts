import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { AlbumComponent } from './content/album/album.component';
import { PhotoCollectionComponent } from './content/photo-collection/photo-collection.component';
import { routes } from './app.router';
import { ProfileComponent } from './content/profile/profile.component';
import { UserManualComponent } from './content/user-manual/user-manual.component';
import { OrdersComponent } from './content/orders/orders.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import {MenuComponent} from './menu/menu.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ImageUploadModule} from 'angular2-image-upload';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LogoutComponent } from './auth/logout/logout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    AlbumComponent,
    PhotoCollectionComponent,
    MenuComponent,
    ProfileComponent,
    UserManualComponent,
    OrdersComponent,
    PricingComponent,
    AboutComponent,
    HomeComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    routes,
    AngularFontAwesomeModule,
    ImageUploadModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
