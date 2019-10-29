import { IProject } from '../../public/Interfaces/projects';
import { ITask } from '../../public/Interfaces/tasks';
import { IUser } from '../../public/Interfaces/user/user';

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

let initialState: IData = {
    project: {
        _id: '',
        name: '',
        author: '',
        isPrivate: false
    },
    tasks: [],
    users_project: []
}

export function projectHasErrored(state = false, action: any) {
    switch (action.type) {
        case 'PROJECT_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function projectIsLoading(state = true, action: any) {
    switch (action.type) {
        case 'PROJECT_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function projectClean(state = initialState, action: any) {
    switch (action.type) {
        case 'PROJECT_IS_CLEAN':
            return action.clean;

        default:
            return state;
    }
}

export function upadteTask(state = initialState, action: any) {
    switch (action.type) {
        case 'TASK_FETCH_DATA_SUCCESS':
            return {
                ...state,
                tasks: action.data
            };
        default:
            return state;
    }
}

export function project(state = initialState, action: any) {
    switch (action.type) {
        case 'PROJECT_FETCH_DATA_SUCCESS':
            return action.data;

        default:
            return state;
    }
}
