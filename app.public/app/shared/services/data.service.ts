import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  // TODO Move this to configuration files
  private albumUrl = 'http://localhost:3000/api/album/';
  
  constructor(private http: HttpClient) {
  }
  
  getSupportedAlbumSizes(): Observable<any> {
    const url = this.albumUrl + 'sizes';
    
    return this.http.get(url);
    
  }
  
  getSupportedAlbumCovers(): Observable<any> {
    const url = this.albumUrl + 'covers';
    
    return this.http.get(url);
    
  }
  
  getSupportedAlbumPapers(): Observable<any> {
    const url = this.albumUrl + 'papers';
    
    return this.http.get(url);
    
  }
  
}
