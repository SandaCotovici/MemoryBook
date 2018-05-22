import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {

  @Input() endpointUrl;
  
  constructor() { }

  ngOnInit() {
  }

}
