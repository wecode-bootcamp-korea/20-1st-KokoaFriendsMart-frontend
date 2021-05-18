import React, { Component } from 'react';
import './StarRatyGrey.scss';

class StarRatyGrey extends React.Component {
  render() {
    const { star } = this.props;
    return (
      <div className="starRatyGrey">
        {[...Array(star)].map(() => (
          <img alt="별" src="/images/stars/star-on-line-sm-gray.svg" />
        ))}
        {[...Array(5 - star)].map(() => (
          <img alt="별" src="/images/stars/star-off-line-sm-gray.svg" />
        ))}
      </div>
    );
  }
}

export default StarRatyGrey;
