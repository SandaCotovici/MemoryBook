import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-manual',
  templateUrl: './user-manual.component.html',
  styleUrls: ['./user-manual.component.css']
})
export class UserManualComponent implements OnInit {
  IsHidden1 = true;
  IsHidden2 = true;
  IsHidden3 = true;
  IsHidden4 = true;
  IsHidden5 = true;

  onSelect1() {
    this.IsHidden1 = !this.IsHidden1;
  }
  onSelect2() {
    this.IsHidden2 = !this.IsHidden2;
  }
  onSelect3() {
    this.IsHidden3 = !this.IsHidden3;
  }
  onSelect4() {
    this.IsHidden4 = !this.IsHidden4;
  }
  onSelect5() {
    this.IsHidden5 = !this.IsHidden5;
  }
  constructor() { }

  ngOnInit() {
  }

}
