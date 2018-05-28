import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule, TabsModule } from 'ngx-bootstrap';

import { DataService } from './services/data.service';
import { CardListComponent } from './components/card-list/card-list.component';


const COMPONENTS = [
  CardListComponent
];

@NgModule({
  imports     : [
    CommonModule,
    TabsModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS,
  providers   : [ DataService ]
})
export class SharedModule {
}
