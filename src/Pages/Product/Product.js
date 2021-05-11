import React, { Component } from 'react';

import './Product.scss';

export class Product extends Component {
  render() {
    return (
      <div className="product">
        <nav></nav>
        <section className="productContents">
          전체 페이지(리뷰, 문의까지)
          <div className="productDetail">
            디테일 페이지 (리뷰 위에까지만)
            <div className="productDetailOutbox">
              이미지 콘텐츠 있는 부분만(마진값 있음) ::before
              <div className="productDetailInnerbox">
                상위 태그 동일 ::before
                <div className="productDetailImagesOutbox">
                  상세 정보 있는 부분만(오른쪽 sticky빼고 )(패딩 값 있음)
                  <div className="productDetailImages">
                    {/* product thumbnail */}
                    <div className="productThumnail">
                      <img
                        className="productThumnailImg"
                        alt="(상품이름) 이미지"
                        src=""
                      ></img>
                    </div>
                  </div>
                </div>
                {/* product floating */}
                <aside className="FloatingOptionOutbox">
                  <div className="FloatingOptionInnerbox">
                    {/* product floating header~~~~~~*/}
                    <header className="productOptionHeading">
                      <p className="ProductCategory">굿즈 카테고리</p>
                      <h1 className="productName">
                        굿즈 이름(레디 미니 파우치 -어피치)
                      </h1>
                      <p className="ProductPrice">
                        가격(discount 적용할 수 있는 태그들 숨겨져있음)
                      </p>
                      <ul>
                        list들 css플랙스의 연속~~
                        <li className="saveCash">
                          <span className="title">리스트 타이틀</span>
                          <span className="content">리스트 콘텐츠</span>
                        </li>
                        <li className="deliveryFee">
                          <span className="title">리스트 타이틀</span>
                          <span className="content">리스트 콘텐츠</span>
                        </li>
                      </ul>
                    </header>
                    {/* ~~~~~~product floating header*/}
                    {/* product floating Amount~~~~~*/}
                    <div className="productQuantity">
                      <span>수량</span>
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
                    {/* ~~~~product floating Amount*/}
                    {/* product floating options~~~~*/}
                    <div className="options">
                      <ul>
                        <li>옵션1</li>
                        <li>옵션2</li>
                      </ul>
                    </div>
                    {/* ~~~~product floating options*/}
                    {/* product floating pay  ~~~~ */}
                    <div className="payOutbox">
                      <div className="payInnerbox">
                        <div className="textLeft">
                          <strong>__</strong>개 상품 금액
                        </div>
                        <div className="textRight">
                          <strong>__</strong>원
                        </div>
                      </div>
                    </div>
                    {/* ~~~~~product floating pay */}
                    {/* product floating bottomBtns  ~~~~ */}
                    <div className="optionButtonsOutbox">
                      <div className="optionButtons">
                        <div>
                          좋아요 버튼
                          <a>
                            <input className="likeCheckbox" type="checkbox" />
                            <label htmlFor="likeButton">
                              <span>하트 아이콘</span>
                              좋아요
                            </label>
                          </a>
                        </div>
                        <div>
                          장바구니 버튼
                          <a>장바구니</a>
                        </div>
                        <div>
                          구매하기 버튼
                          <a>구매하기</a>
                        </div>
                      </div>
                    </div>
                    {/* ~~~~~ product floating bottomBtns*/}
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Product;
