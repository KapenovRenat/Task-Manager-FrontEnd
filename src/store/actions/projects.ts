import { getProjects } from '../../public/services/project';
import { IProject } from '../../public/Interfaces/projects';

export function projectsHasErrored(bool: boolean) {
    return {
        type: 'PROJECTS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function projectsIsLoading(bool: boolean) {
    return {
        type: 'PROJECTS_IS_LOADING',
        isLoading: bool
    };
}

export function projectsFetchDataSuccess(project: IProject[]) {
    return {
        type: 'PROJECTS_FETCH_DATA_SUCCESS',
        project
    };
}

export function projectsFetchData(ischecked: boolean = false) {
    return (dispatch: any) => {
        dispatch(projectsIsLoading(true));

        getProjects(ischecked)
            .then(res => {
                dispatch(projectsFetchDataSuccess(res.data.res));
            })
            .then(res => {
                dispatch(projectsIsLoading(false));
            })
            .catch(e => {
                dispatch(projectsHasErrored(true));
            });
    };
}
