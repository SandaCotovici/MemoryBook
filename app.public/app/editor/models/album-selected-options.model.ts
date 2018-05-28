export class AlbumSelectedOptions {
  size: string;
  cover: string;
  paper: string;
  
  constructor(init?: Partial<AlbumSelectedOptions>) {
    Object.assign(this, init);
  }
}
