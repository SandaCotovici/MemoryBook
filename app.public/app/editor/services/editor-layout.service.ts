import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/index';

import { LayoutToggleAlbumOptionsPanel } from '../actions/editor.actions';


@Injectable()
export class EditorLayoutService {
  
  constructor(private store: Store<fromRoot.State>) { }
  
  toggleAlbumOptionsPanel(value: boolean) {
    this.store.dispatch(new LayoutToggleAlbumOptionsPanel(value));
  }
  
  
  isEditorAlbumOptionsPanelShown() {
    return this.store.select(fromRoot.getEditorAlbumOptionsPanelState);
  }
  
}
