import { ProjectDetails } from '../../model/project-details';
import { Action } from '../action';
import { LoadProjectDetails, LoadProjectDetailsSuccess } from '../action/project-details.actions';

export interface ProjectDetailsReducerState {
  loading: boolean;
  loaded: boolean;
  projectDetails: ProjectDetails[];
}

export const initialState: ProjectDetailsReducerState = {
  loading: false,
  loaded: false,
  projectDetails: [],
};

export function ProjectDetailsReducer(state = initialState, action: Action): ProjectDetailsReducerState {

  switch (action.type) {

    case LoadProjectDetails: {
      return { ...state, loading: true };
    }

    case LoadProjectDetailsSuccess: {
      const updateProjectdetails = state.projectDetails.concat(action.payload.data);
      return { ...state, loading: false, loaded: true, projectDetails: updateProjectdetails };

    }

    default:
      return state;
  }
}


//selector 
export const getProjectDetailsLoading = (state: ProjectDetailsReducerState) => state.loading;
export const getProjectDetailsLoaded = (state: ProjectDetailsReducerState) => state.loaded;
export const getProjectDetails = (state: ProjectDetailsReducerState) => state.projectDetails;
