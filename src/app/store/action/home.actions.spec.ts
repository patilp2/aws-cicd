import * as HomeActions from './home.actions';

describe('Home', () => {
  it('should create an instance', () => {
    expect(new HomeActions.LoadHomes()).toBeTruthy();
  });
});
