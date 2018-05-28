import { Component, OnInit } from '@angular/core';
import { EditorService } from './services/editor.service';
import { Observable } from 'rxjs/Observable';
import { EditorLayoutService } from './services/editor-layout.service';


@Component({
  selector   : 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls  : [ './editor.component.css' ]
})
export class EditorComponent implements OnInit {

  isEditorAlbumOptionsPanelShown$: Observable<boolean>;

  constructor(private editorService: EditorService,
              private editorLayoutService: EditorLayoutService) {
  }


  ngOnInit() {
    this.editorService.loadEditor();
  }

}
