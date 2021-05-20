import React, { Component } from 'react';
import './StarRatyYellow.scss';

class StarRatyYellow extends React.Component {
  render() {
    const { star } = this.props;
    return (
      <div className="starRatyYellow">
        {[...Array(star)].map(() => (
          <img alt="별" src="/images/stars/star-on-line-sm.svg" />
        ))}
        {[...Array(5 - star)].map(() => (
          <img alt="별" src="/images/stars/star-off-line-sm.svg" />
        ))}
      </div>
    );
  }
}

export default StarRatyYellow;
