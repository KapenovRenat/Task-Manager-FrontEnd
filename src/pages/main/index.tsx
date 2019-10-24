import { message } from 'antd';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { IProject } from '../../public/Interfaces/projects';
import { ITask } from '../../public/Interfaces/tasks';
import { mainGetData } from '../../public/services/main';
import CharComponent from '../../pages/main/components/chart';
import MainHeader from '../../public/components/page-header';

const MainPage = ({path}: any) => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        mainGetData()
            .then(res => {
                setTasks(res.data.res.tasks);
                setProjects(res.data.res.projects);
            })
            .catch(e => message.error('sorry try again'))
    }, []);

    return (
        <div className='page'>
            <MainHeader title={'Main'}/>
            <CharComponent tasks = {tasks} projects = {projects}/>
        </div>
    );
}

export default MainPage;
