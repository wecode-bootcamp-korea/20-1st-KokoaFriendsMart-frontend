import React, { Component } from 'react';
import OrderItem from './OrderItem';
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
                {ORDER_DATA.map(el => (
                  <OrderItem
                    key={el.id}
                    itemTitle={el.itemTitle}
                    itemPrice={el.itemPrice}
                    imgSrc={el.imgSrc}
                  />
                ))}
              </div>
              <div className="paymentDetail">
                <div className="paymentDetailHeader">
                  <p>결제정보</p>
                </div>
                <div className="paymentDetailbody">
                  <div className="totalInfo">
                    <p>최종 결제금액</p>
                  </div>
                  <div className="paymentDetailInfo">
                    <div className="outside">
                      <div className="inside">
                        <div>
                          <p className="boldText">주문금액</p>
                        </div>
                        <div>
                          <p className="boldText">17400원</p>
                        </div>
                      </div>
                      <div className="inside">
                        <div>
                          <p className="lightText">상품금액</p>
                        </div>
                        <div>
                          <p className="lightText">17400원</p>
                        </div>
                      </div>
                      <div className="inside">
                        <div>
                          <p className="lightText">즉시할인</p>
                        </div>
                        <div>
                          <p className="lightText">0원</p>
                        </div>
                      </div>
                    </div>
                    <div className="outside">
                      <div className="inside">
                        <div>
                          <p className="boldText">쿠폰할인</p>
                        </div>
                        <div>
                          <p className="boldText">0원</p>
                        </div>
                      </div>
                      <div className="inside">
                        <div>
                          <p className="lightText">상품</p>
                        </div>
                        <div>
                          <p className="lightText">0원</p>
                        </div>
                      </div>
                      <div className="inside">
                        <div>
                          <p className="lightText">배송비</p>
                        </div>
                        <div>
                          <p className="lightText">0원</p>
                        </div>
                      </div>
                    </div>
                    <div className="outside">
                      <div className="inside">
                        <div>
                          <p className="boldText">배송비</p>
                        </div>
                        <div>
                          <p className="boldText">3000원</p>
                        </div>
                      </div>
                      <div className="inside">
                        <div>
                          <p className="boldText">캐시사용</p>
                        </div>
                        <div>
                          <p className="boldText">0원</p>
                        </div>
                      </div>
                    </div>
                    <div className="outside">
                      <div className="inside">
                        <div>
                          <p className="boldText lastText">합계</p>
                        </div>
                        <div>
                          <p className="boldText lastText">20400원</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Orderlist;
