import * as React from 'react';

import {
  Panel,
  ListGroup,
  Col,
  Button,
} from 'react-bootstrap';

import './TaskBlock.scss';

import Task from '../Task';
import TaskCreator from '../TaskCreator';

export default class TaskBlock extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayTaskCreator: false,
    };
  }
  public render() {
    return (
      <Col lg={6} className="task-block">
        <h2 className="title">
          {this.props.title} &nbsp;
          <Button onClick={this.createNewTask.bind(this)}>
            <span className="glyphicon glyphicon-plus"></span>
          </Button>
        </h2>
        <Panel>
          {this.state.isDisplayTaskCreator ? <TaskCreator /> : ''}
          <ListGroup>
            {this.props.tasks.map(task => (<Task task={task} key={task._id}/>))}
          </ListGroup>
        </Panel>
      </Col>
    );
  }
  private createNewTask() {
    this.setState({ isDisplayTaskCreator: !this.state.isDisplayTaskCreator });
  }
}
