import * as LogoutActions from './logout.actions';

describe('Logout', () => {
  it('should create an instance', () => {
    expect(new LogoutActions.LoadLogouts()).toBeTruthy();
  });
});
