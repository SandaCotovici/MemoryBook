import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-memories-create',
  templateUrl: './memories-create.component.html',
  styleUrls: ['./memories-create.component.css']
})
export class MemoriesCreateComponent implements OnInit {
  
  memoryBookName = '';
  
  constructor(private router: Router, public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }
  
  createMemoryBook() {
    
    if (this.memoryBookName) {
      this.router.navigate(['/editor']).then(() => this.bsModalRef.hide());
    }
    
  }

}
