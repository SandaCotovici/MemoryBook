import { AlbumSize } from './album-size.model';
import { AlbumCover } from './album-cover.model';
import { AlbumPaper } from '../models/album-paper.model';


export class AlbumManifest {
  supportedSizes: Array<AlbumSize>;
  supportedCoverTypes: Array<AlbumCover>;
  supportedPaperTypes: Array<AlbumPaper>;
  
  public constructor(init?: Partial<AlbumManifest>) {
    Object.assign(this, init);
  }
}
