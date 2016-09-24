import { Routes, RouterModule } from "@angular/router";

import { CollectionComponent } from "./collection/collection.component";
import { MarketComponent } from "./market/market.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/collection', pathMatch: 'full' },
  { path: 'collection', component: CollectionComponent },
  { path: 'market', component: MarketComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
