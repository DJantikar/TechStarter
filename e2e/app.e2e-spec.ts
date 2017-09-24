import { TechstarterPage } from './app.po';

describe('techstarter App', () => {
  let page: TechstarterPage;

  beforeEach(() => {
    page = new TechstarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
