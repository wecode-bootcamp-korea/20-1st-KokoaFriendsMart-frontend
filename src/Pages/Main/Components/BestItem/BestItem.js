import React, { Component } from 'react';
import ProductItem from '../../../../../src/Components/ProductItem/ProductItem';
import './BestItem.scss';

class BestItem extends Component {
  render() {
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
          <ProductItem />
        </div>
      </div>
    );
  }
}

export default BestItem;
