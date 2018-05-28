export class CardItem {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  img: string;

  public constructor(init?: Partial<CardItem>) {
    Object.assign(this, init);
  }
}
