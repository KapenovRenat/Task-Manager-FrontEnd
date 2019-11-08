import { message } from 'antd';
import { useCallback } from 'react';
import * as React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import './styles.scss';
import { tasksFetchData } from '../../../../store/actions/project';
import { updateTask } from '../../../../public/services/task';

const DragDropContexComponent = ({tasks, getTasks, project}: any) => {
    const onBeforeDragStart = useCallback((e: any) => {
    }, []);

    const onDragStart = useCallback((e: any) => {
    }, []);

    const onDragUpdate = useCallback((e: any) => {
    }, []);

    const onDragEnd = useCallback(async (e: any) => {
        const { destination,  draggableId, source } = e;
        // const task = tasks.find((item: any) => item._id === draggableId);
        // console.log(task);
        if (destination.droppableId !== source.droppableId) {
            if (destination.droppableId === 'doing') {
                try {
                    let res = await updateTask(draggableId, {status_id: 1});
                    getTasks(project._id);
                    message.success(res.data.res);
                } catch (e) {
                    message.error('sorry')
                }
            }

            if (destination.droppableId === 'close') {
                try {
                    let res = await updateTask(draggableId, {status_id: 2});
                    getTasks(project._id);
                    message.success(res.data.res);
                } catch (e) {
                    message.error('sorry')
                }
            }

            if (destination.droppableId === 'open') {
                try {
                    let res = await updateTask(draggableId, {status_id: 0});
                    getTasks(project._id);
                    message.success(res.data.res);
                } catch (e) {
                    message.error('sorry')
                }
            }
        }
    }, []);

    return (
        <div className='context-dnd'>
            <DragDropContext
                onBeforeDragStart={onBeforeDragStart}
                onDragStart={onDragStart}
                onDragUpdate={onDragUpdate}
                onDragEnd={onDragEnd}
            >
                <Droppable droppableId='open' type='PERSON'>
                    {(provided: any, snapshot: any) => (
                        <div
                            ref={provided.innerRef}
                            style={{ backgroundColor: snapshot.isDraggingOver ? '#4a76a8' : '#fff' }}
                            {...provided.droppableProps}
                            className='dnd-column'
                        >
                            <div className="dnd-column-header">To Do</div>
                            {
                                tasks.map((item: any, index: number) => {
                                    if (item.status_id === 0) {
                                        return (
                                            <Draggable draggableId={item._id} index={index} key={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className='dnd-column-item'
                                                    >
                                                        <div className="item">
                                                            <h4>{item.name}</h4>
                                                            <p>Who: {item.user_id.name}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        )
                                    }
                                })
                            }
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId='doing' type='PERSON'>
                    {(provided: any, snapshot: any) => (
                        <div
                            ref={provided.innerRef}
                            style={{ backgroundColor: snapshot.isDraggingOver ? '#4a76a8' : '#fff' }}
                            {...provided.droppableProps}
                            className='dnd-column'
                        >
                            <div className="dnd-column-header">Doing</div>
                            {
                                tasks.map((item: any, index: number) => {
                                    if (item.status_id === 1) {
                                        return (
                                            <Draggable draggableId={item._id} index={index} key={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className='dnd-column-item'
                                                    >
                                                        <div className="item">
                                                            <h4>{item.name}</h4>
                                                            <p>Who: {item.user_id.name}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        )
                                    }
                                })
                            }
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId='close' type='PERSON'>
                    {(provided: any, snapshot: any) => (
                        <div
                            ref={provided.innerRef}
                            style={{ backgroundColor: snapshot.isDraggingOver ? '#4a76a8' : '#fff' }}
                            {...provided.droppableProps}
                            className='dnd-column'
                        >
                            <div className="dnd-column-header">Done</div>
                            {
                                tasks.map((item: any, index: number) => {
                                    if (item.status_id === 2) {
                                        return (
                                            <Draggable draggableId={item._id} index={index} key={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className='dnd-column-item'
                                                    >
                                                        <div className="item">
                                                            <h4>{item.name}</h4>
                                                            <p>Who: {item.user_id.name}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        )
                                    }
                                })
                            }
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}

export default connect(
    (state: any) => ({
        tasks: state.project.tasks
    }),
    dispatch => ({
        getTasks: (id: string) => dispatch(tasksFetchData(id))
    })
)(DragDropContexComponent);
