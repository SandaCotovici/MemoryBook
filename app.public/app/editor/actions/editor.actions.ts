import { Action } from 'redux';
import { AlbumManifest } from '../models/album-manifest.model';

export enum EditorActionsTypes {
  LoadingInit = '[Editor] Initialize editor loading',
  LoadingFinished = '[Editor] Editor loading finished',
  SetupAlbumManifest = '[Editor] Setup album manifest'
}

export class LoadingInit implements Action {
  readonly type = EditorActionsTypes.LoadingInit;
}

export class LoadingFinished implements Action {
  readonly type = EditorActionsTypes.LoadingFinished;
}

export class SetupAlbumManifest implements Action {
  readonly type = EditorActionsTypes.SetupAlbumManifest;
  
  constructor(public payload: AlbumManifest) {}
}

export type EditorActionsUnion = LoadingInit
  | LoadingFinished
  | SetupAlbumManifest;
