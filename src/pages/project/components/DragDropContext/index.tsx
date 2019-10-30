import { useCallback } from 'react';
import * as React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import './styles.scss';

const DragDropContexComponent = ({tasks}: any) => {
    const onBeforeDragStart = useCallback((e: any) => {
    }, []);

    const onDragStart = useCallback((e: any) => {
    }, []);

    const onDragUpdate = useCallback((e: any) => {
    }, []);

    const onDragEnd = useCallback((e: any) => {
        const { destination,  draggableId, source } = e;
        console.log(draggableId);
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
                                tasks.map((item: any, index: number) =>
                                    <Draggable draggableId={item._id} index={index} key={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className='dnd-column-item'
                                            >
                                                <h4>{item.name}</h4>
                                            </div>
                                        )}
                                    </Draggable>
                                )
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
                            <Draggable draggableId='draggable-2' index={1}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className='dnd-column-item'
                                    >
                                        <h4>My draggable2</h4>
                                    </div>
                                )}
                            </Draggable>
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
                            {/*<Draggable draggableId='draggable-3' index={1}>*/}
                            {/*    {(provided, snapshot) => (*/}
                            {/*        <div*/}
                            {/*            ref={provided.innerRef}*/}
                            {/*            {...provided.draggableProps}*/}
                            {/*            {...provided.dragHandleProps}*/}
                            {/*        >*/}
                            {/*            <h4>My draggable2</h4>*/}
                            {/*        </div>*/}
                            {/*    )}*/}
                            {/*</Draggable>*/}
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

    })
)(DragDropContexComponent);
