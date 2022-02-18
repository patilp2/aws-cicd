import * as fromProjectDetails from './project-details.actions';

describe('loadProjectDetailss', () => {
  it('should return an action', () => {
    expect(fromProjectDetails.loadProjectDetailss().type).toBe('[ProjectDetails] Load ProjectDetailss');
  });
});
