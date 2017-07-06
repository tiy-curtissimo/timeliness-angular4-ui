import { TimelinessAngularPage } from './app.po';

describe('timeliness-angular App', () => {
  let page: TimelinessAngularPage;

  beforeEach(() => {
    page = new TimelinessAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
