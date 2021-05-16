import reactDom from 'react-dom';
import React, { Component } from 'react';
// import CharactersList from '../../Components/Nav/CharactersList/CharactersList';
import ProductItem from '../../../../Components/ProductItem/ProductItem';
import './LikePick.scss';

class LikePick extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch('/data/categoryData.json')
      .then(result => result.json())
      .then(categoryData => {
        this.setState({ productList: categoryData.productList });
      });
  }

  render() {
    const { productList } = this.state;
    return (
      <div className="LikePick">
        <div className="likePickContainer">
          <div className="headerContainer">
            <h2 className="title">Like Pick!</h2>
          </div>
          <div className="characterContainer">
            {/* <CharactersList friends={this.state.friends} /> */}
          </div>
          <div className="itemContainer">
            {productList.map(list => {
              return <ProductItem list={list} link="/" />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default LikePick;
