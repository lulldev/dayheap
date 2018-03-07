import * as React from 'react';

import {
  Panel,
  ListGroup,
  Col,
} from 'react-bootstrap';

import Task from '../Task';

export default class TaskBlock extends React.Component<any, any> {
  public render() {
    return (
      <Col lg={6}>
        <Panel>
          <ListGroup>
            {this.props.tasks.map(task => (<Task task={task} key={task._id}/>))}
          </ListGroup>
        </Panel>
      </Col>
    );
  }
}
