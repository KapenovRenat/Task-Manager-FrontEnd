import axios from 'axios';
import { IProject } from '../../../public/Interfaces/projects';

const getProjects = async () => {
    return axios.get('/api/project');
};

const createProject = async (data: IProject) => {
    return axios.post('/api/project', data);
};

export {
    getProjects,
    createProject
}
