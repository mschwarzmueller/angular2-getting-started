import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectableService } from "./shared/collectable.service";

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CollectableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
