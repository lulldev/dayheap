import React, { Component } from 'react';
import {
  ListGroupItem,
} from 'reactstrap';

export default class Task extends Component {
  render() {
    return (
      <ListGroupItem>
        <p>Task text Task text Task text Task text Task text Task text Task text</p>
        <span className="badge badge-success">Default</span>
        <span className="badge badge-success">Default</span>
      </ListGroupItem>
    );
  }
}
