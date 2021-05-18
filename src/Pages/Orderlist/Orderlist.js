import React, { Component } from 'react';
import ORDER_DATA from './OrderListData';
import './Orderlist.scss';

export class Orderlist extends Component {
  constructor() {
    super();
    this.state = {
      orderData: [],
    };
  }

  componentDidMount() {
    this.setState({
      cartData: ORDER_DATA,
    });
  }

  render() {
    return (
      <div className="orderlist">
        <div className="wraper header">
          <div className="mypageHeader">
            <div className="basicInfo userInfo">
              <div className="imgWrap">
                <img alt="profile" src="https://i.ibb.co/1mNL56P/ducky.png" />
              </div>
              <p className="largeText name">박준모님</p>
              <p>junmopark01@gmail.com</p>
            </div>
            <div className="rank userInfo">
              <p className="smallText">등급</p>
              <p className="largeText">일반회원</p>
            </div>
            <div className="coupon userInfo">
              <p className="smallText">쿠폰</p>
              <p className="largeText">0</p>
            </div>
            <div className="cash userInfo">
              <p className="smallText">캐시</p>
              <p className="largeText">2000</p>
            </div>
          </div>
        </div>
        <div className="wraper">
          <main className="orderInfo">
            <div className="myInfo">
              <div>
                <p className="boldText">쇼핑 정보</p>
                <p className="lightText">주문내역</p>
                <p className="lightText">교환/반품</p>
                <p className="lightText">상품 리뷰</p>
                <p className="lightText">좋아요</p>
              </div>
              <div>
                <p className="boldText">회원 정보</p>
                <p className="lightText">쿠폰</p>
                <p className="lightText">캐시 & 포인트</p>
                <p className="lightText">회원정보수정</p>
              </div>
              <div>
                <p className="boldText">문의내역</p>
                <p className="lightText">1:1 문의</p>
                <p className="lightText">상품 Q&A</p>
              </div>
            </div>
            <div className="detail">
              <div className="orderDetail">
                <div className="orderDetailHeader">
                  <p>주문내역상세</p>
                </div>
                <div className="orderItemList">
                  <div className="date">2021.05.21</div>
                  <div className="product">
                    <img
                      alt="img"
                      src="https://i.ibb.co/k3qCkXx/Wear-Hoodie-Peach-1.png"
                    />
                    <p>모찌 클러치</p>
                    <p>17400원</p>
                  </div>
                </div>
              </div>
              <div className="paymentDetail"></div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Orderlist;
