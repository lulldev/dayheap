import * as React from 'react';

import {
  ListGroupItem,
  Button,
  Popover,
  OverlayTrigger,
  ButtonToolbar,
  ButtonGroup,
} from 'react-bootstrap';

import TaskCreator from '../TaskCreator';

import { ITask, ITaskState } from './ITask';
import './Task.scss';

export default class Task extends React.Component<ITask, ITaskState> {
  private taskControlPopover: any;
  constructor() {
    super();
    this.state = {
      isShowFullText: false,
      isTaskEditMode: false,
    };
    this.taskControlPopover = (
      <Popover id="task-control-popover">
        <div className="text-center">
          <ButtonToolbar>
            <ButtonGroup bsSize="small">
              <Button onClick={this.editTask.bind(this)} bsStyle="warning">
                <span className="glyphicon glyphicon-edit"></span>
              </Button>
              <Button bsStyle="success">
                <span className="glyphicon glyphicon-ok"></span>
              </Button>
              <Button bsStyle="danger">
                <span className="glyphicon glyphicon-remove"></span>
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </Popover>
    );
  }
  public render() {
    let taskViewState = <OverlayTrigger trigger="click" rootClose placement="top" overlay={this.taskControlPopover}>
      <ListGroupItem className="task list-group-item">
        <div className="description">
          <div className="category">{this.props.task ? this.props.task.category : 'quot'}</div>
          <p className="text">
            {this.getTaskText()}
            {this.isTaskTextLong() ? <Button bsStyle="link">Подробнее</Button> : ''}
          </p>
        </div>
      </ListGroupItem>
    </OverlayTrigger>;
    if (this.state.isTaskEditMode) {
      taskViewState = <TaskCreator category={this.props.task.category} text={this.props.task.text}/>;
    }
    return (
      taskViewState
    );
  }
  public editTask() {
    this.setState({ isTaskEditMode: !this.state.isTaskEditMode });
  }
  private isTaskTextLong() {
    return (this.props.task.text.length > 20);
  }

  private getTaskText() {
    const taskText = this.props.task ? this.props.task.text : 'test';
    return this.isTaskTextLong() ? `${taskText.slice(0, 20)}...` : taskText;
  }
}
