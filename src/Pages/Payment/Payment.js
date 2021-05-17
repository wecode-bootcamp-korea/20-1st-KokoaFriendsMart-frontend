import React, { Component } from 'react';
import OrderProductItem from './OrderProductIItem';
import './Payment.scss';
import CART_DATA from './cartData';

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      cartData: [],
    };
  }

  componentDidMount() {
    this.setState({
      cartData: CART_DATA,
    });
  }

  render() {
    console.log(CART_DATA);
    return (
      <div className="payment">
        <div className="bgImg">
          <div className="bgText">
            <h1>주문하기</h1>
            <p>주문하실 상품 및 수량을 한번 더 확인해 주세요.</p>
          </div>
        </div>
        <div className="productInfo">
          <div className="orderProductCount">
            <p>주문 상품</p>
          </div>
          <OrderProductItem
            itemTitle={CART_DATA.itemTitle}
            imgSrc={CART_DATA.imgSrc}
          />
        </div>
      </div>
    );
  }
}

export default Payment;
