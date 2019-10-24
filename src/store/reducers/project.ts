import { IProject } from '../../public/Interfaces/projects';

export function projectHasErrored(state = false, action: any) {
    switch (action.type) {
        case 'PROJECT_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function projectIsLoading(state = false, action: any) {
    switch (action.type) {
        case 'PROJECT_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function projects(state = {}, action: any) {
    switch (action.type) {
        case 'PROJECT_FETCH_DATA_SUCCESS':
            return action.project;

        default:
            return state;
    }
}
