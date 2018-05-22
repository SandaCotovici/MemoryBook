import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TabsModule, ButtonsModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';

import { EditorComponent } from './editor.component';
import { PhotoCollectionComponent } from './components/photo-collection/photo-collection.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { SelectAlbumTypeComponent } from './components/select-album-type/select-album-type.component';

import { EditorDataService } from './services/editor-data.service';
import { EditorService } from './services/editor.service';

import { EditorEffects } from './effects/editor.effects';

import { editorReducer } from './reducers/editor.reducer';


export const COMPONENTS = [
  EditorComponent,
  PhotoCollectionComponent,
  HeaderMenuComponent,
  SelectAlbumTypeComponent
];


@NgModule({
  imports     : [
    CommonModule,
    SharedModule,
    TabsModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('editor', editorReducer),
    EffectsModule.forFeature([ EditorEffects ]),
  ],
  declarations: COMPONENTS,
  providers   : [
    EditorService,
    EditorDataService
  ]
})
export class EditorModule {
}
