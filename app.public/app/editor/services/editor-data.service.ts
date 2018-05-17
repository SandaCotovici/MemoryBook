import { Injectable } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Injectable()
export class EditorDataService {

  constructor(private dataService: DataService) { }

  getSupportedAlbumSizes() {
    return this.dataService.getSupportedAlbumSizes().map(data => data.sizes);
  }
  
  getSupportedAlbumCovers() {
    return this.dataService.getSupportedAlbumCovers().map(data => data.covers);
  }
  
  getSupportedAlbumPapers() {
    return this.dataService.getSupportedAlbumPapers().map(data => data.papers);
  }
  
}
