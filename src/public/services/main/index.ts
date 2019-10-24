import axios from 'axios';

const mainGetData = async () => {
    return axios.get('/api/main');
};

export {
    mainGetData
}
