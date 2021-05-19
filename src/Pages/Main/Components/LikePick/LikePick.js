import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CharactersList from './../Nav/CharactersList/CharactersList';
import ProductItem from '../../../../Components/ProductItem/ProductItem';
import { productApi } from '../../../../config';
import './LikePick.scss';

export class LikePick extends Component {
  constructor() {
    super();
    this.state = {
      likePickproductList: [],
      friends: [],
    };
  }

  componentDidMount() {
    const categoryName = '춘삼이';

    console.log(`categoryName`, categoryName);
    fetch(`${productApi}?cname=${categoryName}&limit=4&offset=1`)
      .then(res => res.json())
      .then(res =>
        this.setState({ likePickproductList: res.data.product_list })
      );

    fetch('/data/character.json')
      .then(res => res.json())
      .then(res => this.setState({ friends: res }));
  }

  onClickLikePick = characterName => {
    fetch(`${productApi}?cname=${characterName}&limit=4&offset=1`)
      .then(res => res.json())
      .then(res =>
        this.setState({ likePickproductList: res.data.product_list })
      );
  };

  render() {
    const { likePickproductList, location, size, friends } = this.state;
    return (
      <div className="LikePick">
        <div className="likePickContainer">
          <div className="headerContainer">
            <h2 className="title">Like Pick!</h2>
          </div>
          <div className="characterContainer">
            <div className="characters">
              <CharactersList
                friends={this.state.friends}
                location={'likepickItem'}
                onClickLikePick={this.onClickLikePick}
              />
            </div>
          </div>
          <div className="itemContainer">
            {likePickproductList.map(list => {
              return (
                <ProductItem
                  key={list.id}
                  list={list}
                  size={'likepickItem'}
                  link="/"
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LikePick);
