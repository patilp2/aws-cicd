import * as fromYoutube from './youtube.actions';

describe('loadYoutubes', () => {
  it('should return an action', () => {
    expect(fromYoutube.loadYoutubes().type).toBe('[Youtube] Load Youtubes');
  });
});
