import reactDom from 'react-dom';
import React, { Component } from 'react';
import CharactersList from '../../Components/Nav/CharactersList/CharactersList';
import './LikePick.scss';

class LikePick extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    fetch('/data/character.json')
      .then(res => res.json())
      .then(res => this.setState({ friends: res }));
  }

  render() {
    return (
      <div className="LikePick">
        <div className="likePickContainer">
          <div className="headerContainer">
            <h2 className="title">Like Pick!</h2>
          </div>
          <div className="characterContainer">
            <CharactersList friends={this.state.friends} />
          </div>
          <div className="itemContainer">{/* component mapping */}</div>
        </div>
      </div>
    );
  }
}

export default LikePick;
