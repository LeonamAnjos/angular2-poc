import { WebstormAngularCliPage } from './app.po';

describe('webstorm-angular-cli App', function() {
  let page: WebstormAngularCliPage;

  beforeEach(() => {
    page = new WebstormAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
