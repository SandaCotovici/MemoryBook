import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  // TODO Move this to configuration files
  static readonly Endpoints = {
    album: 'http://localhost:3000/api/album/',
    photos: 'http://localhost:3000/api/photos/'
  };

  constructor(private http: HttpClient) {
  }

  /*
  * Album API
  * */
  getSupportedAlbumSizes(): Observable<any> {
    const url = DataService.Endpoints.album + 'sizes';

    return this.http.get(url);

  }

  getSupportedAlbumCovers(): Observable<any> {
    const url = DataService.Endpoints.album + 'covers';

    return this.http.get(url);

  }

  getSupportedAlbumPapers(): Observable<any> {
    const url = DataService.Endpoints.album + 'papers';

    return this.http.get(url);
  }


  /*
  * Photos API
  * */
  addPhoto(): Observable<any> {
    const url = DataService.Endpoints.photos + 'add';

    const data = {
      clientId: '1',
      photo: '222'
    };

    return this.http.post(url, data);
  }

  getPhotos():  Observable<any> {
    const url = DataService.Endpoints.photos + 'list';

    return this.http.get(url);
  }

}
