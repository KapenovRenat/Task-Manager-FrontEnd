import { combineReducers } from 'redux';
import { messages } from '../../store/reducers/messages';
import { project, projectHasErrored, projectIsLoading } from '../../store/reducers/project';
import { projectsHasErrored, projectsIsLoading, projects } from '../../store/reducers/projects';
import { user, userHasErrored, userIsLoading } from '../../store/reducers/user';
import { MainHasErrored, MainIsLoading, mainState } from './main';

export const mainReducer = combineReducers({
    projectHasErrored,
    projectIsLoading,
    project,

    mainState,
    MainHasErrored,
    MainIsLoading,

    userHasErrored,
    userIsLoading,
    user,

    projectsHasErrored,
    projectsIsLoading,
    projects,

    messages
});
