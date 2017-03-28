import { AadfoPage } from './app.po';

describe('aadfo App', () => {
  let page: AadfoPage;

  beforeEach(() => {
    page = new AadfoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
