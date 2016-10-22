import { Project005CliPage } from './app.po';

describe('project005-cli App', function() {
  let page: Project005CliPage;

  beforeEach(() => {
    page = new Project005CliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
