import * as React from 'react';
import ProjectActionsComponent from '../../pages/projects/components/actions';
import MainHeader from '../../public/components/page-header';

import './styles.scss';

const ProjectsPage = ({path}: any) => {
    return (
        <div className='page projects'>
            <MainHeader title={'Projects'}/>
            <ProjectActionsComponent />
        </div>
    );
}

export default ProjectsPage;
