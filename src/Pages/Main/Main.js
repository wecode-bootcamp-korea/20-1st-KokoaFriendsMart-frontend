import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import LikePick from './Components/LikePick/LikePick';

export class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <LikePick />
      </div>
    );
  }
}

export default Main;
