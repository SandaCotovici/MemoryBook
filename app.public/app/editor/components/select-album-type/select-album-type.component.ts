import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EditorService } from '../../services/editor.service';
import { EditorLayoutService } from '../../services/editor-layout.service';
import { TabDirective, TabsetComponent } from 'ngx-bootstrap';

import { Observable } from 'rxjs/Observable';

import { AlbumManifest } from '../../models/album-manifest.model';
import { AlbumSize } from '../../models/album-size.model';
import { AlbumCover } from '../../models/album-cover.model';
import { CardItem } from '../../../shared/components/card-list/card.model';
import { AlbumPaper } from '../../models/album-paper.model';
import { AlbumSelectedOptions } from '../../models/album-selected-options.model';
import { AlbumSelectedTabs } from '../../models/album-selected-tabs.model';



enum TabDirection {
  PREV = 'PREV',
  NEXT = 'NEXT'
}


@Component({
  selector   : 'app-select-album-type',
  templateUrl: './select-album-type.component.html',
  styleUrls  : [ './select-album-type.component.css' ]
})
export class SelectAlbumTypeComponent implements OnInit, OnDestroy {
  
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  
  tabs = AlbumSelectedTabs;
  selectedTabId: AlbumSelectedTabs = AlbumSelectedTabs.TAB_SIZE;
  selectedAlbumOptions: AlbumSelectedOptions = new AlbumSelectedOptions({});
  albumManifest$: Observable<AlbumManifest>;
  
  private ngDestroy: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  constructor(private editorService: EditorService,
              private editorLayoutService: EditorLayoutService) {
  }
  
  ngOnInit() {
    this.albumManifest$ = this.editorService.getEditorAlbumManifest().filter(data => !!Object.keys(data).length);
  }
  
  ngOnDestroy() {
    this.ngDestroy.next(true);
    this.ngDestroy.complete();
  }
  
  submitSelectedAlbumManifest() {
    if (this.staticTabs.tabs.length === Object.keys(this.selectedAlbumOptions).length) {
      this.editorService.storeSelectedAlbumOptions(this.selectedAlbumOptions);
      this.editorLayoutService.toggleAlbumOptionsPanel(false);
    }
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
  
  onSelectTab(tab: TabDirective) {
    this.selectedTabId = tab.id as AlbumSelectedTabs;
  }
  
  onSelectSizeCard(card: CardItem) {
    this.selectedAlbumOptions.size = card.key;
  }
  
  onSelectCoverCard(card: CardItem) {
    this.selectedAlbumOptions.cover = card.key;
  }
  
  onSelectPaperCard(card: CardItem) {
    this.selectedAlbumOptions.paper = card.key;
  }
  
  go(direction: TabDirection) {
    let idx = this.findTabIndex(this.selectedTabId);
    
    if (idx !== -1) {
      
      switch (direction) {
        case TabDirection.PREV:
          idx--;
          break;
        case TabDirection.NEXT:
          idx++;
          break;
      }
      
      const nextTab = this.staticTabs.tabs[ idx ];
      
      if (nextTab) {
        this.enableTab(nextTab);
        this.selectTab(nextTab);
      }
    }
  }
  
  private findTabIndex(id: AlbumSelectedTabs): number {
    return this.staticTabs.tabs.findIndex(tab => tab.id === id);
  }
  
  private enableTab(tab: TabDirective) {
    tab.disabled = false;
  }
  
  private disableTab(tab: TabDirective) {
    tab.disabled = true;
  }
  
  private selectTab(tab: TabDirective) {
    tab.active = true;
    this.selectedTabId = tab.id as AlbumSelectedTabs;
  }
}
