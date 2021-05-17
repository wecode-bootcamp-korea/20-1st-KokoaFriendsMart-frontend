import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';

class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
        <section className="cartPageOutbox">
          <article className="freeDeliveryBar">
            <span>무료배송 까지</span>
            {/* 만약 장바구니 가격이 5만원 넘었다면 ??끝까지 가고 0원으로뜸 & 그 밑에 가격표시 */}
            <div class="percentageBar">
              <img
                className="character"
                alt="캐릭터"
                src="/images/characterImages/peach.png"
              />
              <div className="movingPrice">
                <span>{'총 가격'}</span>원
              </div>
            </div>
            <span className="price"> (5만원 - 담은가격)원</span>
          </article>

          <article className="checkBox">
            <div className="checkBoxHeader">
              <input className="check" type="checkBox" />
              <span className="choice">전체선택</span>
              <span>(선택개수/총개수)</span>
              <span>옵션</span>
              <span>수량</span>
              <span>상품금액</span>
              <a>전체 삭제</a>
            </div>
            {/* 아래 맵 돌릴 부분 */}
            <div className="cartProductBox">
              <input type="checkBox" />
              <img
                alt="상품 이미지"
                src="https://i.ibb.co/zrrbfgW/Electronics-Imac-Concon-1.png"
              />
              <div className="productNamePrice">
                <p>(상품 이름)</p>
                <p>(상품가격(고정))</p>
              </div>

              <div className="productOption">
                <div className="productQuantity">
                  <span className="quantityGroup">
                    <button className="minus">-</button>
                    <input
                      className="countNum"
                      type="text"
                      maxlength="2"
                      value="1"
                    />
                    <button className="plus">+</button>
                  </span>
                </div>
                <span>{'상품 가격'}원</span>
                <i class="fas fa-trash"></i>
              </div>
            </div>
            {/* 위까지 맵 돌릴 부분 */}
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
