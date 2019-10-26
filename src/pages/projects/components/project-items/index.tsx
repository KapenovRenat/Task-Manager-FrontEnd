import { navigate } from '@reach/router';
import { Button, Card, Empty, message, Popconfirm, Spin } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { projectsFetchData } from '../../../../store/actions/projects';
import { deletProject } from '../../../../public/services/project';
import { IProject } from '../../../../public/Interfaces/projects';

interface InterfaceProjectItems {
    projects: IProject[];
    isLoading: boolean;
    getProjects: () => void;
}

const ProjectItemsComponent = ({projects, isLoading, getProjects}:InterfaceProjectItems) => {

    const goProject = (id: string) => {
        navigate(`/project/${id}`);
    };

    const deleteProject = async (id: string) => {
        try {
            const result = await deletProject(id);
            if (result.data.ok) {
                getProjects();
                message.success(result.data.res);
            }
        } catch (e) {
            message.error('Sorry, try again')
        }
    };

    if (isLoading) {
        return (
            <div className='spin-block'>
                <Spin size="large" />
            </div>
        )
    } else {
        return (
            <div className='projects-items'>
                {
                    !projects.length ? <Empty /> :
                        projects.map((item: IProject) =>
                            <Card style={{ width: 300 }} key={item._id}>
                                <p>Name: {item.name}</p>
                                <p>Author: {(item.author as any).name}</p>
                                <div style={{display: 'flex'}}>
                                    <Popconfirm
                                        title="Are you sure delete this project?"
                                        onConfirm={() => deleteProject(item._id)}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Button type='primary'>Delete</Button>
                                    </Popconfirm>,
                                    <Button type='primary' onClick={() => goProject(item._id)}>Check</Button>
                                </div>
                            </Card>
                        )
                }
            </div>
        );
    }
};

export default connect(
    (state: any) => ({
        projects: state.projects.projectsItem,
        isLoading: state.projectsIsLoading
    }),
    (dispatch: any) => ({
        getProjects: () => dispatch(projectsFetchData())
    })
)(ProjectItemsComponent);
