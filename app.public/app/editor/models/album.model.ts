import { AlbumSelectedOptions } from './album-selected-options.model';


export class Album {
  title: any;
  cover: any;
  pages: any;
  options: AlbumSelectedOptions = new AlbumSelectedOptions();

  public constructor(init?: Partial<Album>) {
    Object.assign(this, init);
  }
}
