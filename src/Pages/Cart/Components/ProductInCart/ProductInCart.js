import React, { Component } from 'react';
import './ProductInCart.scss';

class ProductInCart extends React.Component {
  render() {
    const {
      index,
      cartProduct,
      quantity,
      plus,
      minus,
      handleInputQuantity,
      deleteProduct,
      cartProductData,
    } = this.props;
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
                <button className="minus" type="button" onClick={minus}>
                  -
                </button>
                <input
                  className="countNum"
                  type="text"
                  maxlength="2"
                  value={quantity}
                  onChange={handleInputQuantity}
                />
                <button className="plus" type="button" onClick={plus}>
                  +
                </button>
              </span>
            </div>
            <span>{'상품 가격'}원</span>
            <button
              type="button"
              onClick={e => {
                if (window.confirm('장바구니 목록에서 삭제하시겠습니까?')) {
                  const newProductList = [...cartProductData];
                  newProductList.splice(index, 1);
                  deleteProduct(newProductList);
                } else {
                  e.preventDefault();
                }
              }}
            >
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInCart;
