import { message } from 'antd';
import { getMessagesInDB } from '../../public/services/project';

interface DataMessage {
    _id?: string;
    message?: string;
    email?: string;
    project_id?: string,
    type?: number;
}

export function messageFetchDataSuccess(data: DataMessage[]) {
    return {
        type: 'MESSAGES_FETCH_DATA_SUCCESS',
        data
    };
};
export function messageAddDataSuccess(data: DataMessage[]) {
    return {
        type: 'MESSAGES_ADD_DATA_SUCCESS',
        data
    };
};

export function fetchDataMessage(id:string): any {
    return (dispatch: any) => {
        getMessagesInDB(id)
            .then(res => {
                dispatch(messageFetchDataSuccess(res.data.res));
            })
            .catch(e => message.error('sorry!'))
    }
};
