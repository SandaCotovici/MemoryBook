import { Album } from '../models/album.model';

import {
  EditorActionsTypes,
  EditorActionsUnion,
} from '../actions/editor.actions';


export interface State {
  isLoaded: boolean;
  album: Album;
}


export const initialState: State = {
  isLoaded: false,
  album: new Album()
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
        album: {
          manifest : action.payload
        }
      };
    
    default:
      return state;
  }
}

export const getEditorIsLoaded = (state: State) => state.isLoaded;
export const getEditorAlbum = (state: State) => state.album;
export const getEditorAlbumManifest = (state: State) => state.album.manifest;
