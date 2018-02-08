import React, { Component } from 'react';
import {
  Card,
  ListGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

import './TaskBlock.scss';

import Task from '../Task/Task';

export default class TaskBlock extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg="6">
              <h1 className="display-5 text-center">DAY</h1>
              <Card>
                <ListGroup>
                  <Task />
                  <Task />
                  <Task />
                </ListGroup>
              </Card>
            </Col>
            <Col lg="6">
              <h1 className="display-5 text-center">HEAP</h1>
              <Card>
                <ListGroup>
                  <Task />
                  <Task />
                  <Task />
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
