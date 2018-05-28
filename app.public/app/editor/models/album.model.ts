import { AlbumManifest } from './album-manifest.model';

export class Album {
  manifest: AlbumManifest;
  
  public constructor(init?: Partial<Album>) {
    Object.assign(this, init);
  }
}
