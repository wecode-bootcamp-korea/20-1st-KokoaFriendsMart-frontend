import React, { Component } from 'react';
import Characters from '../Characters/Characters';
import './CharactersList.scss';

class CharactersList extends Component {
  render() {
    const { friends } = this.props;
    return (
      <div className="charactersList">
        {friends.map((friends, id) => {
          return <Characters key={id} img={friends.img} name={friends.name} />;
        })}
      </div>
    );
  }
}

export default CharactersList;
