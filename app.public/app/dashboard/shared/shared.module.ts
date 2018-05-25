import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AddButtonComponent } from './add-button/add-button.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule
  ],
  declarations: [
    HeaderComponent,
    AddButtonComponent
  ],
  exports: [
    HeaderComponent,
    AddButtonComponent
  ]
})
export class SharedModule { }
