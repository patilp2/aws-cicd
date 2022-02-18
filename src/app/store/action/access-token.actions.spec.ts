import * as AccessTokenActions from './access-token.actions';

describe('AccessToken', () => {
  it('should create an instance', () => {
    expect(new AccessTokenActions.LoadAccessTokens()).toBeTruthy();
  });
});
