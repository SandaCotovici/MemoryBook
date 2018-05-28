import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoadingInit, StoreSelectedAlbumOptions } from '../actions/editor.actions';
import * as fromRoot from '../../store/index';
import { AlbumSelectedOptions } from '../models/album-selected-options.model';

@Injectable()
export class EditorService {

  constructor(private store: Store<fromRoot.State>) { }
  
  loadEditor() {
    this.store.dispatch(new LoadingInit());
  }
  
  storeSelectedAlbumOptions(selectedAlbumOptions: AlbumSelectedOptions) {
    this.store.dispatch(new StoreSelectedAlbumOptions(selectedAlbumOptions));
  }
  
  storePageWidget() {
    
    /*
    * Page widget
    *
    * Page widget stores some metadata into a page slot
    * A widget can be of different types and can be placed in different dropable slot areas
    *
    * Ex.
    *
    * Image widget > Slot box
    * Text widget > Slot box
    * Border widget > Slot box border
    * Background widget > Slot box
    * Background widget > Page box
    *
    *
    * */
    
  }
  
  
  getEditorIsLoaded() {
    return this.store.select(fromRoot.getEditorIsLoaded);
  }
  
  getEditorAlbum() {
    return this.store.select(fromRoot.getEditorAlbum);
  }
  
  getEditorAlbumManifest() {
    return this.store.select(fromRoot.getEditorAlbumManifest);
  }

}
