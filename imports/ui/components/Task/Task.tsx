import * as React from 'react';

import { ListGroupItem } from 'react-bootstrap';

import './task.scss';

const Task = props => (
  <ListGroupItem className="task">
    <div className="category">{props.task ? props.task.category : 'quot'}</div>
    <p className="text">{props.task ? props.task.text : 'test'}</p>
  </ListGroupItem>
);

export default Task;
