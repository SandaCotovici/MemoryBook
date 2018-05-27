import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { EditorLayoutService } from '../../services/editor-layout.service';
import { SelectAlbumTypeComponent } from '../select-album-type/select-album-type.component';


@Component({
  selector   : 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls  : [ './header-menu.component.css' ]
})
export class HeaderMenuComponent implements OnInit {
  
  bsModalRef: BsModalRef;
  
  constructor(private editorLayoutService: EditorLayoutService,
              private modalService: BsModalService) {
  }
  
  ngOnInit() {
    this.editorLayoutService.isEditorAlbumOptionsPanelShown()
        .subscribe(value => value ? this.openAlbumOptionsPanel() : this.closeAlbumOptionsPanel());
  }
  
  openAlbumOptionsPanel() {
    
    const initialState = {
      'list' : [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      'title': 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(SelectAlbumTypeComponent, Object.assign(
      initialState,
      { class: 'select-album-options__modal' }));
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  
  closeAlbumOptionsPanel() {
    return this.bsModalRef && this.bsModalRef.hide();
  }
  
}
