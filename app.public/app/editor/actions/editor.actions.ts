import { Action } from 'redux';
import { AlbumManifest } from '../models/album-manifest.model';
import { AlbumSelectedOptions } from '../models/album-selected-options.model';

export enum EditorActionsTypes {
  LoadingInit = '[Editor] Initialize editor loading',
  LoadingFinished = '[Editor] Editor loading finished',
  SetupAlbumManifest = '[Editor] Setup album manifest',
  StoreSelectedAlbumOptions = '[Editor] Store selected album options',
  LayoutToggleAlbumOptionsPanel = '[Editor] Layout: toggle album options panel'
}

/*
* Core actions
* */
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

/*
* Data storing actions
* */
export class StoreSelectedAlbumOptions implements Action {
  readonly type = EditorActionsTypes.StoreSelectedAlbumOptions;
  
  constructor(public payload: AlbumSelectedOptions) {}
}

/*
* Layout actions
* */

export class LayoutToggleAlbumOptionsPanel implements Action {
  readonly type = EditorActionsTypes.LayoutToggleAlbumOptionsPanel;
  
  constructor(public payload: boolean) {}
}

export type EditorActionsUnion = LoadingInit
  | LoadingFinished
  | SetupAlbumManifest
  | StoreSelectedAlbumOptions
  | LayoutToggleAlbumOptionsPanel;
