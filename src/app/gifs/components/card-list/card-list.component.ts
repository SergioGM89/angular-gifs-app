import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent {
  @Input()
  public gifs: Gif[] = [];
  public list = ["Item 1", "Item 2", "Item 3", "Item 4"];
 }
