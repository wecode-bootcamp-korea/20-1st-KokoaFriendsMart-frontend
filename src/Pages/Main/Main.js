import React, { Component } from 'react';
import Carousel from './Components/Carousel/Carousel';
import LikePick from './Components/LikePick/LikePick';
import Mdpick from './Components/Mdpick/Mdpick';
import BestItem from './Components/BestItem/BestItem';

export class Main extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Mdpick />
        <BestItem />
        <LikePick />
      </div>
    );
  }
}

export default Main;
