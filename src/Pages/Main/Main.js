import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import Mdpick from './Components/Mdpick/Mdpick';
import BestItem from './Components/BestItem/BestItem';

export class Main extends Component {
  render() {
    return (
      <div>
        <Mdpick />
        <BestItem />
      </div>
    );
  }
}

export default Main;
