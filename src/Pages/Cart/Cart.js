import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Main/Components/Nav/Nav';
import ProductInCart from '../Cart/Components/ProductInCart';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartProductData: [],
    };
  }

  componentDidMount() {
    fetch('/data/cartProductData.json')
      .then(res => res.json())
      .then(cartProductData => {
        this.setState({
          cartProductData: cartProductData,
        });
      });
  }

  render() {
    const { cartProductData } = this.state;
    // console.log('카트', cartProductData);
    return (
      <div className="cart">
        <Nav />
        {/* <Banner /> */}

        <section className="cartPageOutbox">
          <article className="topBanner">
            <div className="cartDescription">
              <p className="cart">장바구니</p>
              <p>주문하실 상품 및 수량을 한번 더 확인해 주세요.</p>
            </div>

            <img
              alt="코코아프랜즈들"
              src="/images/characterImages/concon.png"
            />
          </article>
          <article className="freeDeliveryBar">
            <span>무료배송 까지</span>
            {/* 만약 장바구니 가격이 5만원 넘었다면 ??끝까지 가고 0원으로뜸 & 그 밑에 가격표시 */}

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
          </article>

          <article className="checkBox">
            <div className="checkBoxHeader">
              <input className="check" type="checkBox" />
              <span className="totalChoice">전체선택</span>
              <span className="choiceNum">(선택개수/총개수)</span>
              <span className="choiceOption">옵션</span>
              <span className="choiceQuantity">수량</span>
              <span className="productTotal">상품금액</span>
              <a className="deleteAll">전체삭제</a>
            </div>
            {/* 상품 목록 맵 */}
            {cartProductData.map((cartProduct, index) => {
              return (
                <ProductInCart key={cartProduct.id} cartProduct={cartProduct} />
              );
            })}
          </article>
          <article className="totalPriceText">
            <div>상품금액</div>
            <div>즉시할인</div>
            <div>배송비</div>
            <div>주문예정 금액</div>
          </article>
          <article className="totalPriceNum">
            <div>상품 총가격</div>
            <div>0원</div>
            <div>3,000원</div>
            <div>
              <span className="equal">=</span>
              <span>(총 금액)</span>원
            </div>
          </article>
          <article className="orderButton">
            <span>(총금액)</span>원 주문하기
          </article>
        </section>
      </div>
    );
  }
}

export default Cart;
