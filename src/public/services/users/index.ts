import axios from 'axios';

const getUsers = async () => {
    return axios.get('/api/users');
};

const invitationUser = async (project_id: string, email: string) => {
    return axios.post(`/api/invite/project/${project_id}`,
        {email},
        );
};

export {
    getUsers,
    invitationUser
}
