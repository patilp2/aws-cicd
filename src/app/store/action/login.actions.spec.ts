import * as LoginActions from './login.actions';

describe('Login', () => {
  it('should create an instance', () => {
    expect(new LoginActions.LoadLogins()).toBeTruthy();
  });
});
