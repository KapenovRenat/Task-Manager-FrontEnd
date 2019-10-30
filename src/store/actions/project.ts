import { createTask, getTasks } from '../../public/services/task';
import { IUser } from '../../public/Interfaces/user/user';
import { ITask } from '../../public/Interfaces/tasks';
import { getProject } from '../../public/services/project';
import { IProject } from '../../public/Interfaces/projects';

interface IUserProject {
    project: string;
    user_id: IUser;
    user_status: number;
    _id: string;
}

interface IData {
    project: IProject;
    tasks: ITask[];
    users_project: IUserProject[];
}

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

export function projectFetchDataSuccess(data: IData) {
    return {
        type: 'PROJECT_FETCH_DATA_SUCCESS',
        data
    };
}
export function tasksFetchDataSuccess(data: ITask[]) {
    return {
        type: 'TASK_FETCH_DATA_SUCCESS',
        data
    };
}

export function projectFetchData(id: string): any {
    return (dispatch: any) => {
        dispatch(projectIsLoading(true));

        getProject(id)
            .then(res => {
                dispatch(projectFetchDataSuccess(res.data.res));
            })
            .then(res => {
                dispatch(projectIsLoading(false));
            })
            .catch(e => {
                dispatch(projectHasErrored(true));
            })
    };
}

export function tasksFetchData(id: string): any {
    return (dispatch: any) => {
        getTasks(id)
            .then(res => {
                dispatch(tasksFetchDataSuccess(res.data.res));
            })
            .catch(e => {
                dispatch(projectHasErrored(true));
            })
    };
}
