import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoriesComponent } from './components/memories/memories.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardSharedModule } from '../shared/dashboard-shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { MemoriesCreateComponent } from './components/memories-create/memories-create.component';
import { FormsModule } from '@angular/forms';
import {UserManualComponent} from './components/user-manual/user-manual.component';
import {ProfileComponent} from './components/profile/profile.component';
import {OrdersComponent} from './components/orders/orders.component';
import {PhotosComponent} from './components/photos/photos.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';


@NgModule({
  imports        : [
    CommonModule,
    SharedModule,
    DashboardSharedModule,
    ModalModule,
    FormsModule,
    BsDropdownModule
  ],
  declarations   : [
    MemoriesComponent,
    MemoriesCreateComponent,
    ProfileComponent,
    UserManualComponent,
    OrdersComponent,
    PhotosComponent
  ],
  entryComponents: [ MemoriesCreateComponent ]
})
export class AlbumsModule {
}
