import * as React from 'react';

import {
  ListGroupItem,
  Button,
  FormGroup,
  FormControl,
} from 'react-bootstrap';

import { ITaskCreatorProps } from './ITaskCreator';

export default class TaskCreator extends React.Component<ITaskCreatorProps, any> {
  constructor(props) {
    super(props);
  }
  public render() {
    return (
      <ListGroupItem>
        <form>
          <FormGroup bsSize="small">
            <FormControl
              type="text"
              placeholder="Категория"
              defaultValue={this.props.category}
            />
            <br/>
            <FormControl
              componentClass="textarea"
              placeholder="Текст задачи"
              defaultValue={this.props.text}
            />
          </FormGroup>
          <Button bsSize="small">Сохранить</Button>
        </form>
      </ListGroupItem>
    );
  }
  private handleCategoryChange(e) {
    console.log(e);
  }
}
