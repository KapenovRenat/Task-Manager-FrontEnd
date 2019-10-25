import { ITask } from '../../public/Interfaces/tasks';
import { IProject } from '../../public/Interfaces/projects';

interface IState {
    projects: IProject[];
    tasks: ITask[];
}

const initialState: IState = {
    projects: [],
    tasks: []
};

export function MainIsLoading(state = false, action:any){
    switch(action.type){
        case 'MAIN_IS_LOADING': return action.isLoading;
        default: return state;
    }
}

export function MainHasErrored(state = false, action:any){
    switch(action.type){
        case 'MAIN_HAS_ERRORED': return action.hasErrored;
        default: return state;
    }
}

export function mainState(state = initialState, action:any){
    switch(action.type){
        case 'MAIN_FETCH_DATA_SUCCESS': return action.main;
        default: return state;
    }
}
