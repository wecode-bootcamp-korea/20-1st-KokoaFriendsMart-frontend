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
            <p>주문 상품 ( {CART_DATA.length} )</p>
          </div>
          {CART_DATA.map(el => (
            <OrderProductItem
              key={el.id}
              itemTitle={el.itemTitle}
              itemPrice={el.itemPrice}
              itemQuantity={el.itemQuantity}
              imgSrc={el.imgSrc}
            />
          ))}
        </div>
        <div className="orderInfo">
          <div className="orderInfoLeft">
            <div className="orderer">
              <p>주문자 정보</p>
            </div>
            <div className="ordererInfo">
              <div className="ordererInfoLeft">
                <p>보내는 분</p>
              </div>
              <div className="ordererInfoRight">
                <input />
              </div>
            </div>
            <div className="ordererInfo">
              <div className="ordererInfoLeft">
                <p>휴대폰</p>
              </div>
              <div className="ordererInfoRight">
                <input />
              </div>
            </div>
            <div className="ordererInfo">
              <div className="ordererInfoLeft">
                <p>이메일</p>
              </div>
              <div className="ordererInfoRight">
                <input />
              </div>
            </div>
            <div className="orderer">
              <p>배송지 정보</p>
            </div>
            <div className="ordererInfo">
              <div className="ordererInfoLeft">
                <p>받는 분</p>
              </div>
              <div className="ordererInfoRight">
                <input />
              </div>
            </div>
            <div className="ordererInfo">
              <div className="ordererInfoLeft">
                <p>주소</p>
              </div>
              <div className="ordererInfoRight">
                <input />
              </div>
            </div>
            <div className="ordererInfo">
              <div className="ordererInfoLeft">
                <p>휴대폰</p>
              </div>
              <div className="ordererInfoRight">
                <input />
              </div>
            </div>
          </div>
          <div className="orderInfoRight">
            <div className="firstRow">
              <h2>최종 결제 금액</h2>
            </div>
            <div className="secondRow">
              <div className="row boldText">
                <div>
                  <p>주문금액</p>
                </div>
                <div>
                  <p>{Number(CART_DATA[0].itemPrice).toLocaleString()} 원</p>
                </div>
              </div>
              <div className="row lightText">
                <div>
                  <p>상품금액</p>
                </div>
                <div>
                  <p>{Number(CART_DATA[0].itemPrice).toLocaleString()} 원</p>
                </div>
              </div>
              <div className="row lightText">
                <div>
                  <p>즉시할인</p>
                </div>
                <div>
                  <p>0 원</p>
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
                  <p>0 원</p>
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
                      {Number(CART_DATA[0].itemPrice).toLocaleString()} 원
                    </mark>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
