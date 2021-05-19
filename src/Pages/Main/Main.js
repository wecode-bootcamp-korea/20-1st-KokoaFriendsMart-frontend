import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import BestItem from './Components/BestItem/BestItem';

export class Main extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <BestItem />
      </div>
    );
  }
}

export default Main;
