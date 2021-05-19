import React, { Component } from 'react';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  render() {
    const { moreView, toggleMoreView } = this.props;
    const productDetail_HTMLCode = this.props.productInformation.contents;
    return (
      <div className="productDetail">
        <ul className={moreView ? 'moreView' : 'descriptionList'}>
          <div
            dangerouslySetInnerHTML={{ __html: productDetail_HTMLCode }}
          ></div>
        </ul>
        <div className="detailMore">
          <button
            className={moreView ? 'hiddenButton' : 'detailMoreButton'}
            onClick={() => toggleMoreView(!moreView)}
          >
            상품 펼쳐보기 <i class="fas fa-chevron-down arrowDownIcon"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
