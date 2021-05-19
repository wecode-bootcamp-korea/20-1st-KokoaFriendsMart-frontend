import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TotalPriceBox.scss';

class TotalPriceBox extends React.Component {
  render() {
    return (
      <div className="totalPriceBox">
        <section className="totalPriceText">
          <div>상품금액</div>
          <div>즉시할인</div>
          <div>배송비</div>
          <div>주문예정 금액</div>
        </section>
        <section className="totalPriceNum">
          <div>상품 총가격</div>
          <div>0원</div>
          <div>3,000원</div>
          <div>
            <span className="equal">=</span>
            <span>(총 금액)</span>원
          </div>
        </section>
      </div>
    );
  }
}
export default TotalPriceBox;
