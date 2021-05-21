import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OrderProductItem from './OrderProductIItem';
import './Payment.scss';

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      cartData: [],
    };
  }

  componentDidMount() {
    console.log(this.props.location.search);
    fetch(
      `http://api.kokoafriendsmart.com/orders${this.props.location.search}`,
      {
        headers: {
          Authorization: localStorage.getItem('accessToken'),
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data) {
          this.setState({
            cartData: data,
          });
          console.log(this.state.cartData);
        }
      });
    window.scrollTo(0, 0);
  }

  postToken = () => {
    fetch('http://api.kokoafriendsmart.com/orders', {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
      body: {
        order_type: 'PURCHASED',
      },
    });
  };

  render() {
    const { cartData } = this.state;
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
            <p>
              주문 상품 ({cartData.data && cartData.data.order_list.length} )
            </p>
          </div>
          {cartData.data &&
            cartData.data.order_list.map(el => (
              <OrderProductItem
                key={el.order_id}
                itemTitle={el.name}
                itemPrice={el.origin_price}
                itemQuantity={el.quantity}
                imgSrc={el.thumbnail_url}
              />
            ))}
        </div>
        <div className="orderInfo">
          <div className="ordererWrap">
            <div className="orderer">
              <p>주문자 정보</p>
            </div>
            <div className="ordererInfo">
              <div className="ordererInfoPlaceholder">
                <p>보내는 분</p>
              </div>
              <div className="ordererInfoInput">
                <input
                  type="text"
                  value={cartData.data && cartData.data.user_info.name}
                />
              </div>
            </div>
            <div className="ordererInfo">
              <div className="ordererInfoPlaceholder">
                <p>휴대폰</p>
              </div>
              <div className="ordererInfoInput">
                <input
                  type="text"
                  value={cartData.data && cartData.data.user_info.phone_number}
                />
              </div>
            </div>
            <div className="ordererInfo">
              <div className="ordererInfoPlaceholder">
                <p>이메일</p>
              </div>
              <div className="ordererInfoInput">
                <input
                  type="text"
                  value={cartData.data && cartData.data.user_info.email}
                />
              </div>
            </div>
            <div className="orderer">
              <p>배송지 정보</p>
            </div>
            <div className="ordererInfo">
              <div className="ordererInfoPlaceholder">
                <p>받는 분</p>
              </div>
              <div className="ordererInfoInput">
                <input type="text" />
              </div>
            </div>
            <div className="ordererInfo">
              <div className="ordererInfoPlaceholder">
                <p>주소</p>
              </div>
              <div className="ordererInfoInput">
                <input type="text" />
              </div>
            </div>
            <div className="ordererInfo">
              <div className="ordererInfoPlaceholder">
                <p>휴대폰</p>
              </div>
              <div className="ordererInfoInput">
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="paymentWrap">
            <div>
              <div className="firstRow">
                <h2>최종 결제 금액</h2>
              </div>
              <div className="secondRow">
                <div className="row boldText">
                  <div>
                    <p>주문금액</p>
                  </div>
                  <div>
                    <p>
                      {cartData.data &&
                        cartData.data.sum_total_discounted_price}
                      원
                    </p>
                  </div>
                </div>
                <div className="row lightText">
                  <div>
                    <p>상품금액</p>
                  </div>
                  <div>
                    <p>
                      {cartData.data &&
                        cartData.data.sum_total_origin_price.toLocaleString()}{' '}
                      원
                    </p>
                  </div>
                </div>
                <div className="row lightText">
                  <div>
                    <p>즉시할인</p>
                  </div>
                  <div>
                    <p>
                      {cartData.data &&
                        cartData.data.sum_total_discount.toLocaleString()}
                      원
                    </p>
                  </div>
                </div>
                <div className="row boldText">
                  <div>
                    <p>쿠폰할인</p>
                  </div>
                  <div>
                    <p>0 원</p>
                  </div>
                </div>
                <div className="row lightText">
                  <div>
                    <p>상품</p>
                  </div>
                  <div>
                    <p>0 원</p>
                  </div>
                </div>
                <div className="row lightText">
                  <div>
                    <p>배송비</p>
                  </div>
                  <div>
                    <p>
                      {cartData.data &&
                        cartData.data.shipping_fee.toLocaleString()}
                      원
                    </p>
                  </div>
                </div>
                <div className="row boldText">
                  <div>
                    <p>캐시사용</p>
                  </div>
                  <div>
                    <p>0 원</p>
                  </div>
                </div>
              </div>
              <div className="thirdRow">
                <div className="row boldText">
                  <div>
                    <p>합계</p>
                  </div>
                  <div>
                    <p>
                      <mark>
                        {cartData.data &&
                          cartData.data.final_price.toLocaleString()}
                        원
                      </mark>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link to="../Orderlist/Orderlist.js">
                <button
                  onClick={this.postToken}
                  type="button"
                  className="orderBtn"
                >
                  주문하기
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
