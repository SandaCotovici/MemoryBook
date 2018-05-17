import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EditorService } from '../../services/editor.service';
import { AlbumManifest } from '../../models/album-manifest.model';
import { Observable } from 'rxjs/Observable';


@Component({
  selector   : 'app-select-album-type',
  templateUrl: './select-album-type.component.html',
  styleUrls  : [ './select-album-type.component.css' ]
})
export class SelectAlbumTypeComponent implements OnInit, OnDestroy {
  
  private ngDestroy: BehaviorSubject<boolean>;
  
  albumManifest$: Observable<AlbumManifest>;
  
  constructor(private editorService: EditorService) {
  }
  
  ngOnInit() {
    this.albumManifest$ = this.editorService.getEditorAlbumManifest();
  }
  
  ngOnDestroy() {
    this.ngDestroy.next(true);
    this.ngDestroy.complete();
  }
  
}
