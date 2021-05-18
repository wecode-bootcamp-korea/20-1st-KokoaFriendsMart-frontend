import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import LikePick from './Components/LikePick/LikePick';
import BestItem from './Components/BestItem/BestItem';

export class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <LikePick />
        <BestItem />
      </div>
    );
  }
}

export default Main;
