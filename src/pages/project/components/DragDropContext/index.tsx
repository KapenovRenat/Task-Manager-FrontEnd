import { useCallback } from 'react';
import * as React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const DragDropContexComponent = () => {
    const onBeforeDragStart = useCallback((e: any) => {
    }, []);

    const onDragStart = useCallback((e: any) => {
        console.log(e)
    }, []);

    const onDragUpdate = useCallback((e: any) => {
    }, []);

    const onDragEnd = useCallback((e: any) => {
    }, []);

    return (
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
                        style={{ backgroundColor: snapshot.isDraggingOver ? 'red' : 'grey' }}
                        {...provided.droppableProps}
                        className='dnd-column'
                    >
                        <Draggable draggableId='draggable-1' index={0}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <h4>My draggable</h4>
                                </div>
                            )}
                        </Draggable>
                    </div>
                )}
            </Droppable>
            <Droppable droppableId='doing' type='PERSON'>
                {(provided: any, snapshot: any) => (
                    <div
                        ref={provided.innerRef}
                        style={{ backgroundColor: snapshot.isDraggingOver ? 'red' : 'grey' }}
                        {...provided.droppableProps}
                        className='dnd-column'
                    >
                        <Draggable draggableId='draggable-2' index={1}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
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
                        style={{ backgroundColor: snapshot.isDraggingOver ? 'red' : 'grey' }}
                        {...provided.droppableProps}
                        className='dnd-column'
                    >
                        <Draggable draggableId='draggable-3' index={1}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <h4>My draggable2</h4>
                                </div>
                            )}
                        </Draggable>
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default DragDropContexComponent;
