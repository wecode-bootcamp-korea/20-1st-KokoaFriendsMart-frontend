import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import CharactersList from '../../Components/Nav/CharactersList/CharactersList';
import ProductItem from '../../../../Components/ProductItem/ProductItem';
import { productApi } from '../../../../config';
import './LikePick.scss';

export class LikePick extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    const categoryName = this.props.match.params.categoryName || '';
    fetch(`${productApi}?cid=${categoryName}`)
      .then(res => res.json())
      .then(res => this.setState({ productList: res.data.product_list }));
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
              return <ProductItem key={list.id} list={list} link="/" />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LikePick);
