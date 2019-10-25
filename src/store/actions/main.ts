import { IUser } from '../../public/Interfaces/user/user';
import { mainGetData } from '../../public/services/main';

export function mainHasErrored(bool: boolean) {
    return {
        type: 'MAIN_HAS_ERRORED',
        hasErrored: bool
    };
}

export function mainIsLoading(bool: boolean) {
    return {
        type: 'MAIN_IS_LOADING',
        isLoading: bool
    };
}

export function mainFetchDataSuccess(main: IUser) {
    return {
        type: 'MAIN_FETCH_DATA_SUCCESS',
        main
    };
}

export function mainFecthData(): any {
    return (dispatch: any) => {
        dispatch(mainIsLoading(true));

        mainGetData()
            .then(res => {
                dispatch(mainIsLoading(true));
                return res.data
            })
            .then(res => {
                dispatch(mainFetchDataSuccess(res.res));
            })
            .catch(e => {
                dispatch(mainHasErrored(true));
            })
    }
}
