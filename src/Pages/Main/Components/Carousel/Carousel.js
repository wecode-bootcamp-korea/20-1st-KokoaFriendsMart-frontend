import React, { Component } from 'react';
import CarouselCard from './CarouselCard';
import CAROUSEL_DATA from './CarouselData';
import './Carousel.scss';

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      carouselDataArr: [],
      index: 0,
      translateXWidth: 0,
      transitionSec: 0,
    };
  }

  componentDidMount() {
    this.setState({
      carouselDataArr: CAROUSEL_DATA,
    });
  }

  goToRight = () => {
    const { index, translateXWidth, carouselDataArr } = this.state;
    if (index % (CAROUSEL_DATA.length - 1) === 0) {
      this.setState({
        index: 0,
        carouselDataArr: carouselDataArr.concat(CAROUSEL_DATA),
        translateXWidth: translateXWidth - 100,
      });
    } else
      this.setState({
        index: index + 1,
        translateXWidth: translateXWidth - 100,
      });
  };

  goToLeft = () => {
    const { index, translateXWidth } = this.state;
    this.setState({
      index: index - 1,
      translateXWidth: translateXWidth + 100,
    });
  };

  render() {
    const { translateXWidth, carouselDataArr } = this.state;
    return (
      <div className="carouselContainer">
        <div
          className="carouselWrap"
          style={{
            transform: `translateX(${translateXWidth}vw)`,
          }}
        >
          {carouselDataArr.map(el => (
            <CarouselCard
              key={el.id * Math.random()}
              src={el.src}
              caption={el.caption}
              title={el.title}
              description={el.description}
            />
          ))}
        </div>
        <button className="prevBtn btn" onClick={this.goToLeft}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="nextBtn btn" onClick={this.goToRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    );
  }
}

export default Carousel;
