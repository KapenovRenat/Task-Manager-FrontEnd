import axios from 'axios';
import { IProject } from '../../../public/Interfaces/projects';

const getProjects = async (isPrivate: boolean = false) => {
    return axios.get('/api/project',{
        params: {isPrivate}
    });
};

const getProject = async (id: string) => {
    return axios.get(`/api/project/${id}`);
};

const createProject = async (data: IProject) => {
    return axios.post('/api/project', data);
};

export {
    getProjects,
    createProject,
    getProject
}
