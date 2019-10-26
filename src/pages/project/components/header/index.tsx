import { navigate } from '@reach/router';
import { Button } from 'antd';
import * as React from 'react';

interface IHeaderProject {
    name: string;
}

const HeaderProject = ({name}:IHeaderProject) => {

    const goBack = () => {
        navigate('/projects');
    };

    return (
        <div className='project-header'>
            <Button type='primary' onClick={goBack}>Go Back</Button>
            <h2>Project Name: {name}</h2>
        </div>
    );
}

export default HeaderProject;
