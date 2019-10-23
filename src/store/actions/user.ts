import { getUserData } from '../../public/services/authorization';
import { IUser } from '../../public/Interfaces/user/user';

export function userHasErrored(bool: boolean) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function userIsLoading(bool: boolean) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function userFetchDataSuccess(user: IUser) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        user
    };
}

export function itemsFetchDataUser() {
    return (dispatch: any) => {
        dispatch(userIsLoading(true));

        getUserData()
            .then(res => {
                dispatch(userIsLoading(false));
                return res.data;
            })
            .then(res => {
                dispatch(userFetchDataSuccess(res.res));
            })
            .catch(e => {
                dispatch(userHasErrored(true));
            });
    };
}
