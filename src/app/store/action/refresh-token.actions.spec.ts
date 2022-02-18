import * as fromRefreshToken from './refresh-token.actions';

describe('loadRefreshTokens', () => {
  it('should return an action', () => {
    expect(fromRefreshToken.loadRefreshTokens().type).toBe('[RefreshToken] Load RefreshTokens');
  });
});
