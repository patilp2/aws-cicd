import * as fromNewsUpdates from './news-updates.actions';

describe('loadNewsUpdatess', () => {
  it('should return an action', () => {
    expect(fromNewsUpdates.loadNewsUpdatess().type).toBe('[NewsUpdates] Load NewsUpdatess');
  });
});
