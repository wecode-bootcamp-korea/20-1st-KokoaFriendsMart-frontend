import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import Mdpick from './Components/Mdpick/Mdpick';

export class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Mdpick />
      </div>
    );
  }
}

export default Main;
