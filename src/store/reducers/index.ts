import { combineReducers } from 'redux';
import { projectHasErrored, projectIsLoading, projects } from '../../store/reducers/project';
import { user, userHasErrored, userIsLoading } from '../../store/reducers/user';
import { mainState } from './main';

export const mainReducer = combineReducers({
    mainState,
    userHasErrored,
    userIsLoading,
    user,

    projectHasErrored,
    projectIsLoading,
    projects
});
