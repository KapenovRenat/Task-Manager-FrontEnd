import { ISub } from '../../../public/Interfaces/projects';

export const isAccess = (arr: ISub[], userID: string) => {
    return !!arr.find((item: ISub) => item.user_id === userID);
};
