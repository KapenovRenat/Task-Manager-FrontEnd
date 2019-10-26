import { combineReducers } from 'redux';
import { projectsHasErrored, projectsIsLoading, projects } from '../../store/reducers/projects';
import { user, userHasErrored, userIsLoading } from '../../store/reducers/user';
import { MainHasErrored, MainIsLoading, mainState } from './main';

export const mainReducer = combineReducers({
    mainState,
    MainHasErrored,
    MainIsLoading,

    userHasErrored,
    userIsLoading,
    user,

    projectsHasErrored,
    projectsIsLoading,
    projects
});
