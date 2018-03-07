import * as React from 'react';

import { ListGroupItem, Button } from 'react-bootstrap';

import { ITask, ITaskState } from './ITask';
import './Task.scss';

export default class Task extends React.Component<ITask, ITaskState> {
  private isTaskTextLong() {
    return (this.props.task.text.length > 20);
  }
  private getTaskText() {
    const taskText = this.props.task ? this.props.task.text : 'test';
    return this.isTaskTextLong() ? `${taskText.slice(0, 20)}...` : taskText;
  }
  public render() {
    return (
      <ListGroupItem className="task list-group-item">
        <div className="description">
          <div className="category">{this.props.task ? this.props.task.category : 'quot'}</div>
          <p className="text">
            {this.getTaskText()}
            {this.isTaskTextLong() ? <Button bsStyle="link">Подробнее</Button> : ''}
            </p>
        </div>
      </ListGroupItem>
    );
  }
}
