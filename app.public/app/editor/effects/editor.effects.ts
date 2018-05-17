import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { combineLatest, mergeMap } from 'rxjs/operators';

import {
  EditorActionsTypes,
  LoadingInit,
  LoadingFinished,
  SetupAlbumManifest,
} from '../actions/editor.actions';

import { EditorDataService } from '../services/editor-data.service';

import { AlbumManifest } from '../models/album-manifest.model';
import { AlbumSize } from '../models/album-size.model';
import { AlbumCover } from '../models/album-cover.model';
import { AlbumPaper } from '../models/album-paper.model';


@Injectable()
export class EditorEffects {
  
  @Effect()
  loadingInit$ = this.actions$.pipe(
    ofType<LoadingInit>(EditorActionsTypes.LoadingInit),
    combineLatest(
      this.editorDataService.getSupportedAlbumSizes(),
      this.editorDataService.getSupportedAlbumCovers(),
      this.editorDataService.getSupportedAlbumPapers()
    ),
    mergeMap(([ {}, sizes, covers , papers]) => {
      
      const actions = [];
      
      const manifest: AlbumManifest = {
        supportedSizes     : sizes as Array<AlbumSize>,
        supportedCoverTypes: covers as Array<AlbumCover>,
        supportedPaperTypes: papers as Array<AlbumPaper>
      };
      
      actions.push(new SetupAlbumManifest(manifest));
      actions.push(new LoadingFinished());
      
      return actions;
    })
  );
  
  constructor(private actions$: Actions,
              private editorDataService: EditorDataService) {
  }
}
