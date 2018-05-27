import { Album } from '../models/album.model';
import { AlbumManifest } from '../models/album-manifest.model';
import { EditorLayout } from '../models/editor-layout.model';

import {
  EditorActionsTypes,
  EditorActionsUnion,
} from '../actions/editor.actions';


export interface State {
  isLoaded: boolean;
  album: Album;
  albumManifest: AlbumManifest;
  layout: EditorLayout;
}


export const initialState: State = {
  isLoaded: false,
  album: new Album(),
  albumManifest: new AlbumManifest(),
  layout: new EditorLayout()
};

export function editorReducer(state: State = initialState, action: EditorActionsUnion): State {
  switch (action.type) {
    case EditorActionsTypes.LoadingInit:
      return {
        ...state,
        isLoaded: false,
      };
    
    case EditorActionsTypes.LoadingFinished:
      return {
        ...state,
        isLoaded: true,
      };
      
    case EditorActionsTypes.SetupAlbumManifest:
      return {
        ...state,
        albumManifest:  action.payload
      };
  
    case EditorActionsTypes.StoreSelectedAlbumOptions:
      return {
        ...state,
        album: {
          ...state.album,
          options: action.payload
        }
      };
  
    case EditorActionsTypes.LayoutToggleAlbumOptionsPanel:
      return {
        ...state,
        layout: {
          ...state.layout,
          albumOptionsPanel: action.payload
        }
      };
    
    default:
      return state;
  }
}

export const getEditorIsLoaded = (state: State) => state.isLoaded;
export const getEditorAlbum = (state: State) => state.album;
export const getEditorAlbumManifest = (state: State) => state.albumManifest;

/*
* Editor Layout selectors
* */
export const getEditorAlbumOptionsPanelState = (state: State) => state.layout.albumOptionsPanel;
