import React, { Component } from 'react';
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
} from 'reactstrap';

import './TaskBlock.scss';


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
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
            <Col lg="6">
              <h1 className="display-5 text-center">HEAP</h1>
              <Card>
                <ListGroup>
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
