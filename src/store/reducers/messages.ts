export function messages(state: any = [], action: any) {
    switch (action.type) {
        case 'MESSAGES_FETCH_DATA_SUCCESS':
            return action.data;
        case 'MESSAGES_ADD_DATA_SUCCESS':
            return [...state, ...action.data];
        default:
            return state;
    }
}
