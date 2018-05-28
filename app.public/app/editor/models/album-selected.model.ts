export class AlbumSelected {
  size: string;
  cover: string;
  paper: string;
  
  public constructor(init?: Partial<AlbumSelected>) {
    Object.assign(this, init);
  }
}
