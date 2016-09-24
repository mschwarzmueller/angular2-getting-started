import { CollectionAppPage } from './app.po';

describe('collection-app App', function() {
  let page: CollectionAppPage;

  beforeEach(() => {
    page = new CollectionAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
