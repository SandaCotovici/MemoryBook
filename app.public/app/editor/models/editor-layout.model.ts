export class EditorLayout {
  editorHeader = true;
  albumOptionsPanel = false;
  
  public constructor(init?: Partial<EditorLayout>) {
    Object.assign(this, init);
  }
}
