import axios from 'axios';
import { ITask } from '../../../public/Interfaces/tasks';

const createTask = async (project_id: string, data: ITask) => {
    return axios.post(`/api/project/${project_id}/task`, data);
};

const getTasks = async (project_id: string) => {
   return axios.get(`/api/project/${project_id}/tasks`);
};

export {
    createTask,
    getTasks
}
