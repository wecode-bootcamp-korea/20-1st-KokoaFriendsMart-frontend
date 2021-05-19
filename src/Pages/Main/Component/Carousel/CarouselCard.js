import React from 'react';
import './Carousel.scss';

class CarouselCard extends React.Component {
  render() {
    const { title, caption, description, src } = this.props;
    return (
      <div className="carouselItem">
        <img className="bgImg" alt={title} src={src} />
        <p className="caption">{caption}</p>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    );
  }
}

export default CarouselCard;
