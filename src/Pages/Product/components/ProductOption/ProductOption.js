import React, { Component } from 'react';

import './ProductOption.scss';

class ProductOption extends React.Component {
  render() {
    const {
      productInformation,
      plusQuantity,
      minusQuantity,
      handleQuantityInput,
      quantitydefaultValue,
      isLiked,
    } = this.props;
    return (
      <div className="productOption">
        <aside className="FloatingOptionOutbox">
          <div className="FloatingOptionInnerbox">
            {/* product floating header~*/}
            <header className="productOptionHeading">
              <p className="ProductCategory">{productInformation.category}</p>
              <h1 className="productName">{productInformation.name}</h1>
              <p className="ProductPrice">
                {Number(productInformation.price).toLocaleString()} 원
              </p>
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

            {/* product floating Amount~*/}
            <div className="productQuantity">
              <span className="quantityText">수량</span>
              <span className="quantityGroup">
                <button className="minus" onClick={minusQuantity}>
                  -
                </button>
                <input
                  className="countNum"
                  type="text"
                  // maxlength="2"
                  value={quantitydefaultValue}
                  onChange={handleQuantityInput}
                />
                <button className="plus" onClick={plusQuantity}>
                  +
                </button>
              </span>
            </div>

            {/* product floating options*/}
            <div className="options">
              <ul>
                <li>
                  <img
                    class="optionImg optionOne"
                    alt="상품 옵션1"
                    src="/images/productDetail/wear/hat1.png"
                  />
                </li>
                <li>
                  <img
                    class="optionImg optionTwo"
                    alt="상품 옵션2"
                    src="/images/productDetail/wear/hat1.png"
                  />
                </li>
              </ul>
            </div>

            {/* product floating pay  */}
            <div className="payOutbox">
              <div className="payInnerbox">
                <div>
                  <strong>{quantitydefaultValue}</strong>개 상품 금액
                </div>
                <div className="totalCost">
                  <strong>
                    {(
                      quantitydefaultValue * productInformation.price
                    ).toLocaleString()}
                  </strong>
                  원
                </div>
              </div>
            </div>
            <div className="countLiked">
              <p>
                <i class="fas fa-heart heartIcon"></i>
                <span>{productInformation.counts_liked}</span>명이 이 상품을
                좋아하고 있어요~
              </p>
            </div>
            {/* product floating bottomBtns  ~~~~ */}
            <div className="optionButtonsOutbox">
              <div className="optionButtons">
                <div className="optionButtonsRow1">
                  <div>
                    <button
                      className="likeButton bottomBtn"
                      // onClick={() => {
                      //   this.setState({productInformation.isLiked? false:true});
                      // }}
                    >
                      <i
                        className={`fa-heart ${
                          productInformation.isLiked ? 'fas yellow' : 'far'
                        }`}
                      ></i>
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
                  <button className="buyButton bottomBtn">구매하기</button>
                </div>
              </div>
            </div>
            {/* ~~~~~ product floating bottomBtns*/}
          </div>
        </aside>
      </div>
    );
  }
}

export default ProductOption;
