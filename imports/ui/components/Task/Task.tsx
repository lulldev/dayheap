import * as React from 'react';

import {
  ListGroupItem,
  Button,
  Popover,
  OverlayTrigger,
  ButtonToolbar,
  ButtonGroup,
} from 'react-bootstrap';

import { ITask, ITaskState } from './ITask';
import './Task.scss';

export default class Task extends React.Component<ITask, ITaskState> {
  private taskControlPopover: any;
  constructor() {
    super();
    this.taskControlPopover = (
      <Popover id="task-control-popover">
        <div className="text-center">
          <ButtonToolbar>
            <ButtonGroup bsSize="small">
              <Button bsStyle="warning">
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
    return (
      <OverlayTrigger trigger="click" rootClose placement="top" overlay={this.taskControlPopover}>
        <ListGroupItem className="task list-group-item">
          <div className="description">
            <div className="category">{this.props.task ? this.props.task.category : 'quot'}</div>
            <p className="text">
              {this.getTaskText()}
              {this.isTaskTextLong() ? <Button bsStyle="link">Подробнее</Button> : ''}
            </p>
          </div>
        </ListGroupItem>
      </OverlayTrigger>
    );
  }
  public handleClick() {
    console.log('clicked');
  }
  private isTaskTextLong() {
    return (this.props.task.text.length > 20);
  }

  private getTaskText() {
    const taskText = this.props.task ? this.props.task.text : 'test';
    return this.isTaskTextLong() ? `${taskText.slice(0, 20)}...` : taskText;
  }
}
