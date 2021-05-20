import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { categoryApi } from '../../../../../config';
import './Characters.scss';

class Characters extends Component {
  render() {
    const { img, name, history } = this.props;
    return (
      <div
        className="friendsContainer"
        onClick={() => history.push(`category/${name}`)}
      >
        <img src={img} alt="characters" />
        <div className="characterNames">{name}</div>
      </div>
    );
  }
}

export default withRouter(Characters);
