import reactDom from 'react-dom';
import React, { Component } from 'react';
import './LikePick.scss';

class LikePick extends Component {
  render() {
    return (
      <div className="LikePick">
        <div className="headerContainer">
          <h2 className="title">Like Pick!</h2>
        </div>
        <div className="characterContainer">{/* character map */}</div>
        <div className="itemContainer">{/* component mapping */}</div>
      </div>
    );
  }
}

export default LikePick;
