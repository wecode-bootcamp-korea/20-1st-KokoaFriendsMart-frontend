import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.scss';

class ProductItem extends Component {
  render() {
    console.log(this.props);
    const { list, link, width, height, fontSize } = this.props;
    return (
      <div className="ProductItem" key="1">
        <div className="item" style={{ width: `${width[0]}` }}>
          <Link to={link} className="thum">
            <div>
              <img
                src={list.imgSrc}
                alt="이미지 섬네일"
                className="productImg mdPickImg"
                style={{ width: `${width[0]}`, height: `${height[0]}` }}
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
            <div className="itemTitle" style={{ fontSize: `${fontSize[0]}` }}>
              {list.itemTitle}
            </div>
            <i
              className={`fa-heart ${list.isLiked ? 'fas yellow' : 'far'}`}
            ></i>
            <div className="itemPrice" style={{ fontSize: `${fontSize[1]}` }}>
              {list.itemPrice}원
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
