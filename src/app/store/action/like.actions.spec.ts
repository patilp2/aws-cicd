import * as fromLike from './like.actions';

describe('loadLikes', () => {
  it('should return an action', () => {
    expect(fromLike.loadLikes().type).toBe('[Like] Load Likes');
  });
});
