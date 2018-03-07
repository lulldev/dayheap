import * as React from 'react';
// import { createContainer } from 'meteor/react-meteor-data';

import {
  Grid,
  Row,
  Panel,
  ListGroup,
  Col,
} from 'react-bootstrap';

import TaskBlock from '../../components/TaskBlock';

// import { tasks } from '../../api/tasks';

export class TaskBoard extends React.Component<any, any> {

  private tasks: any = [
    { _id: 1, text: 'This is task 1', category: 'quot' },
    { _id: 2, text: 'This is task 2', category: 'volgatech' },
    { _id: 3, text: 'This is task 3', category: 'ood' },
  ];
  public render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <TaskBlock tasks={this.tasks}/>
            <TaskBlock tasks={this.tasks}/>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TaskBoard;

// export default createContainer(() => {
//   Meteor.subscribe('tasks');
//   return {
//     tasks: tasks.find({}).fetch(),
//   };
// }, TasksContainer);
