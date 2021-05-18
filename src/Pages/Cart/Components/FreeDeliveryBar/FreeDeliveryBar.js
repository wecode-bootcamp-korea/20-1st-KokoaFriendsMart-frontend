import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FreeDeliveryBar.scss';

class FreeDeliveryBar extends React.Component {
  render() {
    return (
      <section className="freeDeliveryBar">
        <span>무료배송 까지</span>
        <div className="totalBar">
          <div class="percentageBarLeft"></div>
          <div className="percentageBarRight"></div>
          <img
            className="movingCharacter"
            alt="캐릭터"
            src="/images/characterImages/peach.png"
          />
          <div className="movingPrice">
            <span>총 가격</span>원
          </div>
        </div>

        <span className="price"> (5만원 - 담은가격)원</span>
      </section>
    );
  }
}
export default FreeDeliveryBar;
