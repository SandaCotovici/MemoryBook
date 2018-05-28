import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoadingInit } from '../actions/editor.actions';
import * as fromRoot from '../../store/index';

@Injectable()
export class EditorService {

  constructor(private store: Store<fromRoot.State>) { }
  
  loadEditor() {
    this.store.dispatch(new LoadingInit());
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
