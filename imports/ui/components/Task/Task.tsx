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

import { ITask, ITaskState, TaskViewMode } from './ITask';
import './Task.scss';

export default class Task extends React.Component<ITask, ITaskState> {
  private taskControlPopover: any;
  constructor() {
    super();
    this.state = {
      isShowFullText: false,
      taskViewMode: TaskViewMode.default,
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

    this.editTask = this.editTask.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this);
  }
  public render() {
    let taskView = <OverlayTrigger
      trigger="click"
      rootClose
      placement="top"
      onClick={this.handleTaskClick}
      overlay={this.taskControlPopover}>
      <ListGroupItem
        className="task list-group-item">
        <div className="description">
          <div className="category">{this.props.task ? this.props.task.category : 'quot'}</div>
          <p className="text">
            {this.getTaskText()}
          </p>
        </div>
      </ListGroupItem>
    </OverlayTrigger>;
    if (this.state.taskViewMode === TaskViewMode.edit) {
      taskView = <TaskCreator category={this.props.task.category} text={this.props.task.text}/>;
    }
    return (
      taskView
    );
  }
  private editTask() {
    this.setState({ taskViewMode: TaskViewMode.edit });
  }
  private handleTaskClick() {
    this.setState({ taskViewMode: TaskViewMode.fulltext });
  }
  private prepareTaskText(text): string {
    return (text.length > 50) ? `${text.slice(0, 50)}...` : text;
  }
  private getTaskText(): string {
    const taskText = this.props.task ? this.props.task.text : 'test';
    return (this.state.taskViewMode !== TaskViewMode.fulltext) ?
      this.prepareTaskText(taskText) : taskText;
  }
}
