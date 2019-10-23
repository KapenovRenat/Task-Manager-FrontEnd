import { combineReducers } from 'redux';
import { user, userHasErrored, userIsLoading } from '../../store/reducers/user';
import { mainState } from './main';

export const mainReducer = combineReducers({
    mainState,
    userHasErrored,
    userIsLoading,
    user
});
