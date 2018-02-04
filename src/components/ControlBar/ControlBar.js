import React, { Component } from 'react';

import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

export default class ControlBar extends Component {
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">dayheap</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
