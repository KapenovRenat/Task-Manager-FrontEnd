import axios from 'axios';
import { ITask } from '../../../public/Interfaces/tasks';

const createTask = async (project_id: string, data: ITask) => {
    return axios.post(`/api/project/${project_id}/task`, data);
};

export {
    createTask
}
