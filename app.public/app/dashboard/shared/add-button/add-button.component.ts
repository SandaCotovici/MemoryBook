import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
  @Output() actionCallback = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }

  onClickedAction() {
    this.actionCallback.emit(true);
  }
}
