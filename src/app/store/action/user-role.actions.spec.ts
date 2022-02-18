import * as UserRoleActions from './user-role.actions';

describe('UserRole', () => {
  it('should create an instance', () => {
    expect(new UserRoleActions.LoadUserRoles()).toBeTruthy();
  });
});
