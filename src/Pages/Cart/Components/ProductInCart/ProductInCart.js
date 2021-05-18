import React, { Component } from 'react';
import './ProductInCart.scss';

class ProductInCart extends React.Component {
  render() {
    const { cartProduct } = this.props;
    return (
      <div className="productInCart">
        <div className="cartProductBox">
          <input type="checkBox" />
          <img
            alt={`장바구니 상품 ${cartProduct.id}`}
            src={cartProduct.thumbnail_url}
          />
          <div className="productNamePrice">
            <p>{cartProduct.name}</p>
            <p>{cartProduct.price}</p>
          </div>
          <div className="productOption">
            <div className="productQuantity">
              <span className="quantityGroup">
                <button className="minus">-</button>
                <input
                  className="countNum"
                  type="text"
                  maxlength="2"
                  value="1"
                />
                <button className="plus">+</button>
              </span>
            </div>
            <span>{'상품 가격'}원</span>
            <i class="fas fa-trash"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInCart;
