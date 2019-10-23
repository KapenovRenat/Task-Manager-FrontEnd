import { IUser } from '../../../public/Interfaces/user/user';
import axios from 'axios';

const signUp = async (user: IUser) => {
    return axios.post('/api/registration', user);
};

const signIn = async (user: IUser) => {
    return axios.post('/api/login', user);
};

const saveTokenToLocalStorage = async (token: string) => {
    localStorage.setItem('Token', token);
};


export {
    signUp,
    signIn,
    saveTokenToLocalStorage
}
