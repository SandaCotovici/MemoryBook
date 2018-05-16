import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { ImageCollectionComponent } from './components/image-collection/image-collection.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EditorComponent, ImageCollectionComponent]
})
export class EditorModule { }
