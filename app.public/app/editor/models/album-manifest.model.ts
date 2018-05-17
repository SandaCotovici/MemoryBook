export class AlbumManifest {
  supportedSizes: Array<string>;
  supportedCoverTypes: Array<string>;
  supportedPaperTypes: Array<string>;
  
  public constructor(init?: Partial<AlbumManifest>) {
    Object.assign(this, init);
  }
}
