import * as React from 'react';

import { ListGroupItem } from 'react-bootstrap';

require('./task.scss');

const Task = props => (
  <ListGroupItem className="task">
    <p>{props.task ? props.task.text : 'test'}</p>
    <span className="badge badge-success">Default</span>
    <span className="badge badge-success">Default</span>
  </ListGroupItem>
);

export default Task;
