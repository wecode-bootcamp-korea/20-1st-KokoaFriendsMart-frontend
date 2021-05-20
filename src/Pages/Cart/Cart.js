import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Main/Components/Nav/Nav';
import FreeDeliveryBar from './Components/FreeDeliveryBar/FreeDeliveryBar';
import CheckBoxHeader from './Components/CheckBoxHeader/CheckBoxHeader';
import ProductInCart from './Components/ProductInCart/ProductInCart';
import TotalPriceBox from './Components/TotalPriceBox/TotalPriceBox';
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
          cartProductData,
        });
      });
  }

  render() {
    const { cartProductData } = this.state;
    return (
      <div className="cart">
        <Nav />
        {/* <Banner /> */}

        <section className="cartPageOutbox">
          <section className="topBanner">
            <div className="cartDescription">
              <p className="cart">장바구니</p>
              <p>주문하실 상품 및 수량을 한번 더 확인해 주세요.</p>
            </div>
            <img
              alt="코코아프랜즈들"
              src="/images/characterImages/concon.png"
            />
          </section>
          <FreeDeliveryBar />

          <section className="checkBox">
            <CheckBoxHeader />
            {cartProductData.map((cartProduct, index) => {
              return (
                <ProductInCart key={cartProduct.id} cartProduct={cartProduct} />
              );
            })}
          </section>
          <TotalPriceBox />
          <button tupe="button" className="orderButton">
            <span>(총금액)</span>원 주문하기
          </button>
        </section>
      </div>
    );
  }
}

export default Cart;
