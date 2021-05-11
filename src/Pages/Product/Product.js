import React, { Component } from 'react';

import './Product.scss';

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      productDetailPage: [],
    };
  }

  componentDidMount() {
    fetch('/data/productDetailPage.json')
      .then(res => res.json())
      .then(productPageData => {
        this.setState({
          productDetailPage: productPageData,
        });
      });
  }

  render() {
    const { productDetailPage } = this.state;
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
                      <p className="ProductCategory">(카테고리)</p>
                      <h1 className="productName">(이름)</h1>
                      <p className="ProductPrice">(가격)</p>
                      <ul>
                        <li className="saveCash">
                          <span className="title">적립캐시</span>
                          <span className="content">
                            회원 구매 시 3% 최종 금액에 따라 변동 가능
                          </span>
                        </li>
                        <li className="deliveryFee">
                          <span className="title">배송비</span>
                          <span className="content">5만원 이상 무료배송</span>
                        </li>
                      </ul>
                    </header>
                    {/* ~~~~~~product floating header*/}
                    {/* product floating Amount~~~~~*/}
                    <div className="productQuantity">
                      <span className="quantityText">수량</span>
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
                        <li>
                          <img
                            class="optionImg optionOne"
                            alt="상품 옵션1"
                            src=""
                          />
                        </li>
                        <li>
                          <img
                            class="optionImg optionTwo"
                            alt="상품 옵션2"
                            src=""
                          />
                        </li>
                      </ul>
                    </div>
                    {/* ~~~~product floating options*/}
                    {/* product floating pay  ~~~~ */}
                    <div className="payOutbox">
                      <div className="payInnerbox">
                        <div className="textLeft">
                          <strong>(수량)</strong>개 상품 금액
                        </div>
                        <div className="textRight">
                          <strong>(가격)</strong>원
                        </div>
                      </div>
                    </div>
                    {/* ~~~~~product floating pay */}
                    {/* product floating bottomBtns  ~~~~ */}
                    <div className="optionButtonsOutbox">
                      <div className="optionButtons">
                        <div className="optionButtonsRow1">
                          <div>
                            <button className="likeButton bottomBtn">
                              <img alt="하트" />
                              <span>좋아요</span>
                            </button>
                          </div>
                          <div>
                            <button className="cartButton bottomBtn">
                              <span>장바구니</span>
                            </button>
                          </div>
                        </div>
                        <div className="optionButtonsRow2">
                          <button className="buyButton bottomBtn">
                            구매하기
                          </button>
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
