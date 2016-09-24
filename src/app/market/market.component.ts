import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
})
export class MarketComponent implements OnInit {
  collectables = [
    {description: 'A very rare copy of "jQuery for Dummies"', type: 'Book'},
    {description: 'The first Letter ever written', type: 'Piece of Paper'},
    {description: 'A photograph showing nothing', type: 'Photo'},
    {description: 'A box with all sold Zunes', type: 'Garbage'}
  ];

  onAddToCollection() {
    alert('Hello!');
  }

  constructor() { }

  ngOnInit() {
  }

}
