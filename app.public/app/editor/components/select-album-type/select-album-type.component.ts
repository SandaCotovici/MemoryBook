import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EditorService } from '../../services/editor.service';

import { Observable } from 'rxjs/Observable';

import { AlbumManifest } from '../../models/album-manifest.model';
import { AlbumSize } from '../../models/album-size.model';
import { AlbumCover } from '../../models/album-cover.model';
import { CardItem } from '../../../shared/components/card-list/card.model';
import { AlbumPaper } from '../../models/album-paper.model';
import { AlbumSelected } from '../../models/album-selected.model';



@Component({
  selector   : 'app-select-album-type',
  templateUrl: './select-album-type.component.html',
  styleUrls  : [ './select-album-type.component.css' ]
})
export class SelectAlbumTypeComponent implements OnInit, OnDestroy {
  selectedAlbumOptions: AlbumSelected = new AlbumSelected({});
  
  albumManifest$: Observable<AlbumManifest>;
  
  private ngDestroy: BehaviorSubject<boolean>;
  
  constructor(private editorService: EditorService) {
  }
  
  ngOnInit() {
    this.albumManifest$ = this.editorService.getEditorAlbumManifest();
  }
  
  ngOnDestroy() {
    this.ngDestroy.next(true);
    this.ngDestroy.complete();
  }
  
  mapSupportedSizesToCardList(array: Array<AlbumSize>) {
    return array.map(item => new CardItem({
      key        : item.key,
      title      : item.title,
      subtitle   : `${item.width}x${item.height}`,
      description: item.description
    }));
  }
  
  mapSupportedCoverToCardList(array: Array<AlbumCover>) {
    return array.map(item => new CardItem({
      key        : item.key,
      title      : item.title,
      description: item.description
    }));
  }
  
  mapSupportedPaperToCardList(array: Array<AlbumPaper>) {
    return array.map(item => new CardItem({
      key        : item.key,
      title      : item.title,
      description: item.description
    }));
  }
  
  onSelectSize(card: CardItem) {
    console.log(card);
    this.selectedAlbumOptions.size = card.key;
  }
  
  onSelectCover(card: CardItem) {
    this.selectedAlbumOptions.cover = card.key;
  }
  
  onSelectPaper(card: CardItem) {
    this.selectedAlbumOptions.paper = card.key;
  }
}
