import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import LikePick from './Components/LikePick/LikePick';
import Mdpick from './Components/Mdpick/Mdpick';
import BestItem from './Components/BestItem/BestItem';

export class Main extends Component {
  render() {
    return (
      <div>
        <Mdpick />
        <BestItem />
        <LikePick />
      </div>
    );
  }
}

export default Main;
