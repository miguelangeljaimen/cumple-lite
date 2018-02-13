import { CumpleLitePage } from './app.po';

describe('cumple-lite App', function() {
  let page: CumpleLitePage;

  beforeEach(() => {
    page = new CumpleLitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
