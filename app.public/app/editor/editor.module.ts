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
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { AlbumCanvasComponent } from './components/album-canvas/album-canvas.component';

import { EditorService } from './services/editor.service';
import { EditorDataService } from './services/editor-data.service';
import { EditorLayoutService } from './services/editor-layout.service';

import { EditorEffects } from './effects/editor.effects';

import { editorReducer } from './reducers/editor.reducer';




export const COMPONENTS = [
  EditorComponent,
  PhotoCollectionComponent,
  HeaderMenuComponent,
  SelectAlbumTypeComponent,
  ToolboxComponent,
  AlbumCanvasComponent
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
    EditorDataService,
    EditorLayoutService
  ],
  entryComponents: [
    SelectAlbumTypeComponent
  ]
})
export class EditorModule {
}
