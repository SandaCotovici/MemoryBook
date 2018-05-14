import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoriesComponent } from './components/memories/memories.component';
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { MemoriesCreateComponent } from './components/memories-create/memories-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports        : [
    CommonModule,
    SharedModule,
    ModalModule,
    FormsModule
  ],
  declarations   : [ MemoriesComponent, MemoriesCreateComponent ],
  entryComponents: [ MemoriesCreateComponent ]
})
export class AlbumsModule {
}
