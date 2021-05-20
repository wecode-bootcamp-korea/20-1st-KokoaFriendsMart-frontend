import React, { Component } from 'react';
import './Payment.scss';

class OrderProductItem extends Component {
  render() {
    const { itemTitle, itemPrice, itemQuantity, imgSrc } = this.props;
    return (
      <div className="orderProductItem">
        <div>
          <img alt={itemTitle} src={imgSrc} />
        </div>
        <div>
          <p>{itemTitle}</p>
          <p>{Number(itemPrice).toLocaleString()}원</p>
        </div>
        <div>
          <p>[수량] {itemQuantity}</p>
        </div>
        <div>
          <p>{Number(itemPrice * itemQuantity).toLocaleString()}원</p>
        </div>
      </div>
    );
  }
}

export default OrderProductItem;
