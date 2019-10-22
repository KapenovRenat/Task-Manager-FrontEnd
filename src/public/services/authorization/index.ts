import { IUser } from '../../../public/Interfaces/user/user';
import axios from 'axios';

const signUp = async (user: IUser) => {
    return axios.post('/api/registration', user);
};


export {
    signUp
}
