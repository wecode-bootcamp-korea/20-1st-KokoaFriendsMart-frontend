import React, { Component } from 'react';
import OrderItem from './OrderItem';
import './Orderlist.scss';

class Orderlist extends Component {
  constructor() {
    super();
    this.state = {
      orderData: [],
    };
  }

  componentDidMount() {
    fetch('http://api.kokoafriendsmart.com/orders?orderType=PURCHASED', {
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          orderData: data,
        });
      });
  }

  render() {
    const { orderData } = this.state;
    console.log(orderData.data && orderData.data.order_list[0].date);
    return (
      <div className="orderlist">
        <div className="wraper header">
          <div className="mypageHeader">
            <div className="basicInfo userInfo">
              <div className="imgWrap">
                <img alt="profile" src="https://i.ibb.co/1mNL56P/ducky.png" />
              </div>
              <p className="largeText name">
                {orderData.data && orderData.data.user_info.name}님
              </p>
              <p>{orderData.data && orderData.data.user_info.email}</p>
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
                {orderData.data &&
                  orderData.data.order_list.map(el => (
                    <OrderItem
                      key={el.order_id}
                      itemTitle={el.name}
                      itemPrice={el.total_discounted_price}
                      imgSrc={el.thumbnail_url}
                      date={el.date}
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
                          <p className="boldText">
                            {orderData.data &&
                              orderData.data.sum_total_discounted_price.toLocaleString()}
                            원
                          </p>
                        </div>
                      </div>
                      <div className="inside">
                        <div>
                          <p className="lightText">상품금액</p>
                        </div>
                        <div>
                          <p className="lightText">
                            {orderData.data &&
                              orderData.data.sum_total_origin_price.toLocaleString()}
                            원
                          </p>
                        </div>
                      </div>
                      <div className="inside">
                        <div>
                          <p className="lightText">즉시할인</p>
                        </div>
                        <div>
                          <p className="lightText">
                            -
                            {orderData.data &&
                              orderData.data.sum_total_discount.toLocaleString()}
                            원
                          </p>
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
                          <p className="lightText">
                            {orderData.data &&
                              orderData.data.shipping_fee.toLocaleString()}
                            원
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="outside">
                      <div className="inside">
                        <div>
                          <p className="boldText">배송비</p>
                        </div>
                        <div>
                          <p className="boldText">
                            {orderData.data &&
                              orderData.data.shipping_fee.toLocaleString()}
                            원
                          </p>
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
                          <p className="boldText lastText">
                            {orderData.data &&
                              orderData.data.final_price.toLocaleString()}
                            원
                          </p>
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
