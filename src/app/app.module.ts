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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    routes,
    AngularFontAwesomeModule,
    ImageUploadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
