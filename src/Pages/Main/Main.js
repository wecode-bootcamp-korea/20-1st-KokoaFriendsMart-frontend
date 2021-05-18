import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import Carousel from './Component/Carousel/Carousel';

export class Main extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Carousel />
      </div>
    );
  }
}

export default Main;
