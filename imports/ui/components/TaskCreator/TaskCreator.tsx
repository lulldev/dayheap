import * as React from 'react';

import {
  ListGroupItem,
  Button,
  FormGroup,
  FormControl,
} from 'react-bootstrap';

export default class TaskCreator extends React.Component<any, any> {
  constructor() {
    super();
  }
  public render() {
    return (
      <ListGroupItem>
        <form>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="Категория"
            />
            <br/>
            <FormControl componentClass="textarea" placeholder="Текст задачи" />
          </FormGroup>
          <Button>Сохранить</Button>
        </form>
      </ListGroupItem>
    );
  }
}
