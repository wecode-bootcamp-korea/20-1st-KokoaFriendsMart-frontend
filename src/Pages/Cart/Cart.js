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
      quantity: 1,
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

  handleInputQuantity = e => {
    this.setState({ quantity: e.target.value });
  };

  plus = () => {
    this.setState({ quantity: Number(this.state.quantity) + 1 });
  };

  minus = () => {
    if (this.state.quantity === 1) return;
    this.setState({ quantity: this.state.quantity - 1 });
  };

  deleteProduct = list => {
    this.setState({ cartProductData: [...list] });
  };

  deleteAll = emptyList => {
    this.setState({ cartProductData: [...emptyList] });
  };

  render() {
    const { cartProductData, quantity } = this.state;
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
            <CheckBoxHeader
              cartProductData={cartProductData}
              deleteAll={this.deleteAll}
            />
            {cartProductData.map((cartProduct, index) => {
              return (
                <ProductInCart
                  index={index}
                  key={cartProduct.id}
                  cartProductData={cartProductData}
                  cartProduct={cartProduct}
                  quantity={quantity}
                  plus={this.plus}
                  minus={this.minus}
                  handleInputQuantity={this.handleInputQuantity}
                  deleteProduct={this.deleteProduct}
                />
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
