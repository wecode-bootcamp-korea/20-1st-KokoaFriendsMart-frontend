import React from 'react';
import './Carousel.scss';

class CarouselCard extends React.Component {
  render() {
    return (
      <div className="carouselItem">
        <img className="bgImg" alt={this.props.title} src={this.props.src} />
        <p className="caption">{this.props.caption}</p>
        <h3 className="title">{this.props.title}</h3>
        <p className="description">{this.props.description}</p>
      </div>
    );
  }
}

export default CarouselCard;
