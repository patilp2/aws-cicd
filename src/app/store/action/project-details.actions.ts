import { ProjectDetails } from '../../model/project-details';

export const LoadProjectDetails = 'Load Project-details';
export const LoadProjectDetailsSuccess = 'Load Project-details Success';
export const LoadProjectDetailsFailure = 'Load Project-details Failure';

export class LoadProjectdetailsDataAction {
  readonly type = LoadProjectDetails;
}

export class LoadProjectdetailsDataSuccessAction {
  readonly type = LoadProjectDetailsSuccess;
  constructor(public payload?: { data: ProjectDetails[] }) { }
}
