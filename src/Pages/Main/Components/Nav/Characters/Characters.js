import React, { Component } from 'react';
import './Characters.scss';

class Characters extends Component {
  render() {
    const { img, name } = this.props;
    return (
      <div className="friendsContainer">
        <img src={img} alt="characters" />
        <div>{name}</div>
      </div>
    );
  }
}

export default Characters;
