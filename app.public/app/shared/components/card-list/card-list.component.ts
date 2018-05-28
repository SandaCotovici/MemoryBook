import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardItem } from './card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  
  @Input() cardList: Array<CardItem> = [];
  @Output() onSelectCard: EventEmitter<CardItem> = new EventEmitter();
  selectedCard;
  
  constructor() { }

  ngOnInit() {
  }
  
  onSelectCardAction(card: CardItem) {
    this.onSelectCard.emit(card);
  }

}
