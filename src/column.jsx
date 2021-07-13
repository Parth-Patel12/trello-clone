import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';
import { TaskList,Container,Title } from './style';

export default class Column extends React.Component {
    render() {
        return (
          <Container>
            <Title>{this.props.column.title}</Title>
            <Droppable droppableId={this.props.column.id}>
              {(provided, snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {this.props.tasks.map((task, index) => (
                        <Task key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        );
      }
  
}
