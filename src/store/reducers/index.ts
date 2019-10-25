import { combineReducers } from 'redux';
import { projectHasErrored, projectIsLoading, projects } from '../../store/reducers/project';
import { user, userHasErrored, userIsLoading } from '../../store/reducers/user';
import { MainHasErrored, MainIsLoading, mainState } from './main';

export const mainReducer = combineReducers({
    mainState,
    MainHasErrored,
    MainIsLoading,

    userHasErrored,
    userIsLoading,
    user,

    projectHasErrored,
    projectIsLoading,
    projects
});
