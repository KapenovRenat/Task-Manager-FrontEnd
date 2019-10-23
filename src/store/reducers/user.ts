export function userHasErrored(state = false, action: any) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function userIsLoading(state = true, action: any) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function user(state = {}, action: any) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.user;

        default:
            return state;
    }
}
