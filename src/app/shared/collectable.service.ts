import { Collectable } from "./collectable.model";

export class CollectableService {
  private collectables: Collectable[] = [
    {description: 'A very rare copy of "jQuery for Dummies"', type: 'Book'},
    {description: 'The first Letter ever written', type: 'Piece of Paper'},
    {description: 'A photograph showing nothing', type: 'Photo'},
    {description: 'A box with all sold Zunes', type: 'Garbage'}
  ];

  getCollectables() {
    return this.collectables;
  }
}
