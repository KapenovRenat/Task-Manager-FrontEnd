import { IProject } from '../../public/Interfaces/projects';

export function projectsHasErrored(state = false, action: any) {
    switch (action.type) {
        case 'PROJECTS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function projectsIsLoading(state = true, action: any) {
    switch (action.type) {
        case 'PROJECTS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

interface state {
    projectsItem: IProject[];
};

let initialState: state = {
    projectsItem: []
};

export function projects(state = initialState, action: any) {
    switch (action.type) {
        case 'PROJECTS_FETCH_DATA_SUCCESS':
            return {projectsItem: action.project};

        default:
            return state;
    }
}
