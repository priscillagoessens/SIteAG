import { AppSitealiPage } from './app.po';

describe('app-siteali App', () => {
  let page: AppSitealiPage;

  beforeEach(() => {
    page = new AppSitealiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
