import React, { Component } from 'react';
import './ProductInCart.scss';

class ProductInCart extends React.Component {
  render() {
    const {
      index,
      cartProduct,
      plus,
      minus,
      handleInputQuantity,
      deleteProduct,
      cartProductData,
      isChecked,
      toggleCheckBox,
    } = this.props;
    console.log(isChecked);

    return (
      <div className="productInCart">
        <div className="cartProductBox">
          <input
            type="checkBox"
            checked={isChecked[index]}
            onClick={() => toggleCheckBox(index)}
          />
          <img
            alt={`장바구니 상품 ${cartProduct.order_id}`}
            src={cartProduct.thumbnail_url}
          />
          <div className="productNamePrice">
            <p>{cartProduct.name}</p>
            <p>{cartProduct.origin_price.toLocaleString()}원</p>
          </div>
          <div className="productOption">
            <div className="productQuantity">
              <span className="quantityGroup">
                <button
                  className="minus"
                  type="button"
                  onClick={() => minus(index, cartProduct.quantity)}
                >
                  -
                </button>
                <input
                  className="countNum"
                  type="text"
                  value={cartProduct.quantity}
                  onChange={handleInputQuantity}
                />
                <button
                  className="plus"
                  type="button"
                  onClick={() => plus(index, cartProduct.quantity)}
                >
                  +
                </button>
              </span>
            </div>
            <span>
              {(
                cartProduct.origin_price * cartProduct.quantity
              ).toLocaleString()}
              원
            </span>
            <button
              type="button"
              onClick={e => {
                if (window.confirm('장바구니 목록에서 삭제하시겠습니까?')) {
                  const newProductList = [...cartProductData];
                  newProductList.splice(index, 1);
                  deleteProduct(newProductList);
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
