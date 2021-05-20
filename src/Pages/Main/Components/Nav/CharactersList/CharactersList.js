import React, { Component } from 'react';
import Characters from '../Characters/Characters';
import './CharactersList.scss';

class CharactersList extends Component {
  render() {
    const { friends, location, onClickLikePick } = this.props;
    return (
      <div className={`charactersList ${location}`}>
        {friends.map((friends, id) => {
          return (
            <Characters
              onClickLikePick={onClickLikePick}
              key={id}
              img={friends.img}
              name={friends.name}
            />
          );
        })}
      </div>
    );
  }
}

export default CharactersList;
