import React, { Component } from 'react';
import ProductItem from '../../../../Components/ProductItem/ProductItem';
import './Mdpick.scss';
import '../../../../Components/ProductItem/ProductItem.scss';

class Mdpick extends Component {
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
        this.setState({ productList: categoryData.products_list });
      });
  }

  render() {
    const { productList } = this.state;
    return (
      <div className="Mdpick">
        <div className="mdpickContainer">
          <div className="titleContainer">
            <h2 className="mdPickTitle">MD's Pick</h2>
          </div>
          <div className="mdItemList">
            <div className="mdItemTitleContainer">
              <h3 className="mdItemTitle">
                춘삼이의
                <br />
                Must Pick!
              </h3>
              <p>
                프랜즈 마켓에서 가장 핫한
                <br />잇 아이템들!
              </p>
            </div>
            {productList.map(list => {
              return (
                <ProductItem
                  list={list}
                  link="/"
                  size={'mdpickItem'}
                  key={list.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Mdpick;
