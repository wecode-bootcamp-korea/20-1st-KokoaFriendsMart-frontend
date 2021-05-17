import React, { Component } from 'react';
import './Payment.scss';
import CART_DATA from './cartData';

class OrderProductItem extends Component {
  render() {
    const { id, itemTitle, itemPrice, itemQuantity, imgSrc } = this.props;
    return (
      <div className="orderProductItem">
        <div>
          <img alt={itemTitle} src={imgSrc} />
        </div>
        <div>
          <p>{itemTitle}</p>
        </div>
        <div>
          <p>{itemQuantity}</p>
        </div>
        <div>
          <p>{itemPrice}</p>
        </div>
      </div>
    );
  }
}

export default OrderProductItem;
