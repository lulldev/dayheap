import * as React from 'react';

import {
  Panel,
  ListGroup,
  Col,
} from 'react-bootstrap';

import './TaskBlock.scss';

import Task from '../Task';

export default class TaskBlock extends React.Component<any, any> {
  public render() {
    return (
      <Col lg={6} className="task-block">
        <h2 className="title">{this.props.title}</h2>
        <Panel>
          <ListGroup>
            {this.props.tasks.map(task => (<Task task={task} key={task._id}/>))}
          </ListGroup>
        </Panel>
      </Col>
    );
  }
}
