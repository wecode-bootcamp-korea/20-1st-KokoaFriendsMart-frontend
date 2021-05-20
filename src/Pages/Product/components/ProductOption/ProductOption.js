import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './ProductOption.scss';

class ProductOption extends React.Component {
  goToCart = () => {
    this.props.history.push('/cart');
  };

  goToPayment = () => {
    this.props.history.push('/payment');
  };

  render() {
    const {
      productInformation,
      plusQuantity,
      minusQuantity,
      handleQuantityInput,
      quantity,
      isLiked,
      onClickAddCartBtn,
    } = this.props;
    // const randomRelativeOption =
    return (
      <div className="productOption">
        <aside className="FloatingOptionOutbox">
          <div className="FloatingOptionInnerbox">
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
            <div className="productQuantity">
              <span className="quantityText">수량</span>
              <span className="quantityGroup">
                <button className="minus" onClick={minusQuantity}>
                  -
                </button>
                <input
                  className="countNum"
                  type="text"
                  value={quantity}
                  onChange={handleQuantityInput}
                />
                <button className="plus" onClick={plusQuantity}>
                  +
                </button>
              </span>
            </div>
            <div className="options">
              <ul>
                <li>
                  <img
                    class="optionImg optionOne"
                    alt="상품 옵션1"
                    src="https://i.ibb.co/n7cYbbC/Electronics-Phone-Peepee-4.png"
                  />
                </li>
                <li>
                  <img
                    class="optionImg optionTwo"
                    alt="상품 옵션2"
                    src="https://i.ibb.co/s2Mg3gB/Electronics-Phone-Peepee-1.png"
                  />
                </li>
              </ul>
            </div>
            <div className="payOutbox">
              <div className="payInnerbox">
                <div>
                  <strong>{quantity}</strong>개 상품 금액
                </div>
                <div className="totalCost">
                  <strong>
                    {(quantity * productInformation.price).toLocaleString()}
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
            <div className="optionButtonsOutbox">
              <div className="optionButtons">
                <div className="optionButtonsRow1">
                  <div>
                    <button type="button" className="likeButton bottomBtn">
                      <i
                        className={`fa-heart ${
                          productInformation.isLiked ? 'fas yellow' : 'far'
                        }`}
                      ></i>
                      <span>좋아요</span>
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="cartButton bottomBtn"
                      onClick={onClickAddCartBtn}
                      disabled={productInformation.is_soldout ? true : false}
                    >
                      <span>장바구니</span>
                    </button>
                  </div>
                </div>
                <div className="optionButtonsRow2">
                  <button
                    type="button"
                    className="buyButton bottomBtn"
                    onClick={this.goToPayment}
                    disabled={productInformation.is_soldout ? true : false}
                  >
                    구매하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}

export default withRouter(ProductOption);
