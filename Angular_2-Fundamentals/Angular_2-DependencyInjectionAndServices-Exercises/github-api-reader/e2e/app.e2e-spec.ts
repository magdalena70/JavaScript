import { GithubApiReaderPage } from './app.po';

describe('github-api-reader App', () => {
  let page: GithubApiReaderPage;

  beforeEach(() => {
    page = new GithubApiReaderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
