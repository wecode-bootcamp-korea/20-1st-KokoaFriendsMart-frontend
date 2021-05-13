import React, { Component } from 'react';
import Characters from '../Characters/Characters';
import './CharactersList.scss';

class CharactersList extends Component {
  render() {
    const { friends } = this.props;
    return (
      <div className="characterList">
        {friends.map(friends => {
          return <Characters img={friends.img} name={friends.name} />;
        })}
      </div>
    );
  }
}

export default CharactersList;
