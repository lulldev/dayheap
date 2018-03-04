import * as React from 'react';

import {
  Panel,
  ListGroup,
  Col,
} from 'react-bootstrap';

import Task from '../Task';

export class TaskBoard extends React.Component<any, any> {
  public render() {
    return (
      <Col lg={6}>
        <Panel>
          <ListGroup>
            123
          </ListGroup>
        </Panel>
      </Col>
    );
  }
}

export default TaskBoard;
//             {props.tasks.map(task => (<Task task={task} key={task._id}/>))}
