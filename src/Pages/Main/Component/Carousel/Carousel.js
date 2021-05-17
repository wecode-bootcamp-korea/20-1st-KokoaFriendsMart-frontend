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
      width: 300,
    };
  }

  componentDidMount() {
    this.setState({
      carouselDataArr: CAROUSEL_DATA,
    });
  }

  goToRight = () => {
    const { index, translateXWidth, width } = this.state;
    if (index === 2) {
      this.setState({
        index: 0,
        carouselDataArr: this.state.carouselDataArr.concat(CAROUSEL_DATA),
        width: width + 300,
      });
    }
    if (index < 2) {
      this.setState({
        index: index + 1,
        translateXWidth: translateXWidth - 100,
      });
    }
  };

  goToLeft = () => {
    const { index, translateXWidth } = this.state;
    this.setState({
      index: index - 1,
      translateXWidth: translateXWidth + 100,
    });
  };

  render() {
    console.log(this.state.index);
    const { translateXWidth, carouselDataArr, width } = this.state;
    return (
      <div className="carouselContainer">
        <div
          className="carouselWrap"
          style={{
            transform: `translateX(${translateXWidth}vw)`,
            width: `${width}vw`,
          }}
        >
          {carouselDataArr.map(el => (
            <CarouselCard
              src={el.src}
              key={el.id * 10}
              caption={el.caption}
              title={el.title}
              description={el.description}
            />
          ))}
        </div>
        <button className="prevBtn" onClick={this.goToLeft}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="nextBtn" onClick={this.goToRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    );
  }
}

export default Carousel;
