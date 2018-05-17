import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TabsModule } from 'ngx-bootstrap';

import { EditorComponent } from './editor.component';
import { ImageCollectionComponent } from './components/image-collection/image-collection.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { SelectAlbumTypeComponent } from './components/select-album-type/select-album-type.component';

import { EditorDataService } from './services/editor-data.service';
import { EditorService } from './services/editor.service';

import { EditorEffects } from './effects/editor.effects';

import { editorReducer } from './reducers/editor.reducer';




export const COMPONENTS = [
  EditorComponent,
  ImageCollectionComponent,
  HeaderMenuComponent,
  SelectAlbumTypeComponent
];


@NgModule({
  imports     : [
    CommonModule,
    TabsModule,
    StoreModule.forFeature('editor', editorReducer),
    EffectsModule.forFeature([EditorEffects]),
  ],
  declarations: COMPONENTS,
  providers   : [
    EditorService,
    EditorDataService
  ]
})
export class EditorModule {
}
