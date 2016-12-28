import { TeacherRatingPage } from './app.po';

describe('teacher-rating App', function() {
  let page: TeacherRatingPage;

  beforeEach(() => {
    page = new TeacherRatingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
