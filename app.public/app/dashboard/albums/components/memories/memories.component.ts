import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MemoriesCreateComponent } from '../memories-create/memories-create.component';


@Component({
  selector   : 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls  : [ './memories.component.css' ]
})
export class MemoriesComponent implements OnInit {
  bsModalRef: BsModalRef;
  
  constructor(private modalService: BsModalService) {
  }
  
  ngOnInit() {
  }
  
  createMemoryBook() {
    const initialState = {
      'class': 'memories-create-modal'
    };
    this.bsModalRef = this.modalService.show(MemoriesCreateComponent, initialState);
  }
  
}
