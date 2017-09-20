import { TonyBusinessmanPage } from './app.po';

describe('tony-businessman App', () => {
  let page: TonyBusinessmanPage;

  beforeEach(() => {
    page = new TonyBusinessmanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
