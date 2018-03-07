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

  private tasks: any = {
    heap: [
      { _id: 1, category: 'quot', text: 'разобрать группу вопросов, посмотреть' +
        ' конспекты, посмотреть вопросы, поставить цель на сдачу' },
      { _id: 2, text: 'This is task 2', category: 'volgatech' },
      { _id: 3, text: 'This is task 3', category: 'volgatech' },
    ],
    today: [
      { _id: 1, text: 'This is task 1', category: 'quot' },
      { _id: 2, text: 'This is task 2', category: 'volgatech' },
    ],
  };
  public render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <TaskBlock tasks={this.tasks.today} title="today"/>
            <TaskBlock tasks={this.tasks.heap} title="heap"/>
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
