import { getProjects } from '../../public/services/project';
import { IProject } from '../../public/Interfaces/projects';

export function projectHasErrored(bool: boolean) {
    return {
        type: 'PROJECT_HAS_ERRORED',
        hasErrored: bool
    };
}

export function projectIsLoading(bool: boolean) {
    return {
        type: 'PROJECT_IS_LOADING',
        isLoading: bool
    };
}

export function projectFetchDataSuccess(project: IProject[]) {
    return {
        type: 'PROJECT_FETCH_DATA_SUCCESS',
        project
    };
}

export function projectsFetchData() {
    return (dispatch: any) => {
        dispatch(projectIsLoading(true));

        getProjects()
            .then(res => {
                dispatch(projectIsLoading(false));
                return res.data;
            })
            .then(res => {
                dispatch(projectFetchDataSuccess(res.res));
            })
            .catch(e => {
                dispatch(projectHasErrored(true));
            });
    };
}
