import { navigate } from '@reach/router';
import { Button, Card, Empty, message, Popconfirm, Spin } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { isAccess } from '../../../../public/services/validation/custom-validation';
import { IUser } from '../../../../public/Interfaces/user/user';
import { projectsFetchData } from '../../../../store/actions/projects';
import { deletProject } from '../../../../public/services/project';
import { IProject } from '../../../../public/Interfaces/projects';

interface InterfaceProjectItems {
    projects: IProject[];
    isLoading: boolean;
    getProjects: () => void;
    user: IUser;
}

const ProjectItemsComponent = ({projects, isLoading, getProjects, user}:InterfaceProjectItems) => {
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
                                <p>Number of people: {item.subscribes.length}</p>
                                <div style={{display: 'flex'}}>
                                    {
                                        user._id === (item.author as any)._id &&
                                        <Popconfirm
                                            title="Are you sure delete this project?"
                                            onConfirm={() => deleteProject(item._id)}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <Button type='primary'>Delete</Button>
                                        </Popconfirm>
                                    }
                                    {isAccess(item.subscribes, user._id) && <Button type='primary' onClick={() => goProject(item._id)}>Check</Button>}
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
        isLoading: state.projectsIsLoading,
        user: state.user
    }),
    (dispatch: any) => ({
        getProjects: () => dispatch(projectsFetchData())
    })
)(ProjectItemsComponent);
