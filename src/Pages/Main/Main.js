import React, { Component } from 'react';
import Mdpick from './Components/Mdpick/MdPick';
import Nav from './Components/Nav/Nav';

export class Main extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <MdPick></MdPick>
      </div>
    );
  }
}

export default Main;
