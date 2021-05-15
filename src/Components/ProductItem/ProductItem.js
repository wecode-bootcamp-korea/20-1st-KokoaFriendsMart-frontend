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
                src={list.thumbnail_url}
                alt="이미지 섬네일"
                className="productImg"
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
            <div className="itemTitle">{list.name}</div>
            <i
              className={`fa-heart ${list.is_liked ? 'fas yellow' : 'far'}`}
            ></i>
            <div className="itemPrice">{list.price.toLocaleString()}원</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
