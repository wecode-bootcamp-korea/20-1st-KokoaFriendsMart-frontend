import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.scss';

class ProductItem extends Component {
  render() {
    const { list, link } = this.props;
    return (
      <div className="ProductItem" key={list.id}>
        <div className="item">
          <Link to={link} className="thum">
            <div>
              <img
                src={list.imgSrc}
                alt="이미지 섬네일"
                className="productImg"
              />
            </div>
            <span className={`label ${list.isSaled ? 'sale' : 'hide'}`}>
              SALE
            </span>
            <span className={`label ${list.isSoldOut ? 'soldOut' : 'hide'}`}>
              SOLD
              <br />
              OUT
            </span>
            <span className={`label ${list.isSet ? 'set' : 'hide'}`}>SET</span>
            <span className={`label ${list.isNew ? 'new' : 'hide'}`}>NEW</span>
          </Link>
          <div className="itemDesc">
            <div className="itemTitle">{list.itemTitle}</div>
            <i
              className={`fa-heart ${list.isLiked ? 'fas yellow' : 'far'}`}
            ></i>
            <div className="itemPrice">{list.itemPrice.toLocaleString()}원</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
