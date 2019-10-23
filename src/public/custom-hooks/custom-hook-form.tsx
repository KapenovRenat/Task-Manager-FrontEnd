import { useState } from 'react';
import { IUser } from '../../public/Interfaces/user/user';

export function useUserData(InitialUser: IUser) {
    let [user, setUser] = useState<IUser>(InitialUser);

    let bind = {
        onChange: (e: any) => {
            const { value, name } = e.currentTarget;
            setUser({ ...user, [name]: value });
        }
    };

    return [user, bind];
}
