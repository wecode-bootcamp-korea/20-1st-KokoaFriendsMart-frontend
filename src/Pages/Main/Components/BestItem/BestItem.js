import React, { Component } from 'react';
import ProductItem from '../../../../../src/Components/ProductItem/ProductItem';
import './BestItem.scss';

class BestItem extends Component {
  state = {
    productList: [],
  };

  componentDidMount() {
    fetch('/data/categoryData.json')
      .then(result => result.json())
      .then(productList => {
        this.setState({ productList: productList.products_list });
      });
  }
  render() {
    const { productList } = this.state;
    return (
      <div className="BestItem">
        <div className="sectionInfo">
          <h2 className="title">Best Item</h2>
          <ol className="subtitleContainer">
            <li className="subtitle update active">실시간</li>
            <li className="subtitle week">주간</li>
            <li className="subtitle steady">스테디셀러</li>
          </ol>
          <div className="more">베스트 상품 더 보기</div>
        </div>
        <div className="sectionContents">
          {productList.map(list => {
            return <ProductItem key={list.id} list={list} link="/" />;
          })}
        </div>
      </div>
    );
  }
}

export default BestItem;
