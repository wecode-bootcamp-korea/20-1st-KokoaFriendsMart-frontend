import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.scss';

class ProductItem extends Component {
  render() {
    const { list, link, width, height, fontSize } = this.props;
    return (
      <div className="ProductItem">
        <div className="item" style={{ width: `${width[0]}` }}>
          <Link to={link} className="thum">
            <div>
              <img
                src={list.thumbnail_url}
                alt="이미지 섬네일"
                className="productImg mdPickImg"
                style={{ width: `${width[0]}`, height: `${height[0]}` }}
              />
            </div>
            <span className={`label ${list.is_sale ? 'sale' : 'hide'}`}>
              SALE
            </span>
            <span className={`label ${list.is_soldout ? 'soldOut' : 'hide'}`}>
              SOLD
              <br />
              OUT
            </span>
            <span className={`label ${list.is_set ? 'set' : 'hide'}`}>SET</span>
            <span className={`label ${list.is_new ? 'new' : 'hide'}`}>NEW</span>
          </Link>
          <div className="itemDesc">
            <div className="itemTitle" style={{ fontSize: `${fontSize[0]}` }}>
              {list.name}
            </div>
            <i
              className={`fa-heart ${list.is_liked ? 'fas yellow' : 'far'}`}
            ></i>
            <div className="itemPrice" style={{ fontSize: `${fontSize[1]}` }}>
              {list.price}원
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
