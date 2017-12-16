import { Component, OnInit } from '@angular/core';

import { CollectableService } from "../shared/collectable.service";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html'
})
export class MarketComponent implements OnInit {
  collectables = [];

  onAddToCollection() {
    alert('Hello!');
  }

  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
   this.collectables = this.collectableService.getCollectables();
  }

}
