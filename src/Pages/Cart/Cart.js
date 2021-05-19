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
      isChecked: [],
      productPrice: 0,
      totalProductPrice: 0,
    };
  }

  componentDidMount() {
    fetch('/data/cartProductData.json')
      .then(res => res.json())
      .then(cartProductData => {
        this.setState({
          cartProductData,
          // isChecked: Array(this.state.cartProductData.length).fill(true),
        });
        this.setState(previousState => ({
          isChecked: Array(previousState.cartProductData.length).fill(true),
        }));
        console.log(cartProductData);
      });
  }

  handleInputQuantity = e => {
    this.setState({ quantity: e.target.value });
  };

  plus = (index, quantity) => {
    if (quantity === 10) return;
    this.setState({
      cartProductData: this.state.cartProductData.map((productdata, i) =>
        index === i ? { ...productdata, quantity: quantity + 1 } : productdata
      ),
    });
  };

  minus = (index, quantity) => {
    if (quantity === 1) return;
    this.setState({
      cartProductData: this.state.cartProductData.map((productdata, i) =>
        i === index ? { ...productdata, quantity: quantity - 1 } : productdata
      ),
    });
  };

  deleteProduct = list => {
    this.setState({ cartProductData: [...list] });
  };

  deleteAll = emptyList => {
    this.setState({ cartProductData: [...emptyList] });
  };

  toggleCheckBox = index => {
    console.log(index);
    const isChecked = this.state.isChecked;
    isChecked[index] = !isChecked[index];
    this.setState({
      isChecked: isChecked,
    });
  };

  render() {
    const { cartProductData, isChecked, productPrice, totalProductPrice } =
      this.state;
    console.log(isChecked);
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
                  isChecked={isChecked}
                  cartProduct={cartProduct}
                  // quantity={quantity}
                  plus={this.plus}
                  minus={this.minus}
                  handleInputQuantity={this.handleInputQuantity}
                  deleteProduct={this.deleteProduct}
                  toggleCheckBox={this.toggleCheckBox}
                />
              );
            })}
          </section>
          <TotalPriceBox
            productPrice={productPrice}
            totalProductPrice={totalProductPrice}
          />
          <button tupe="button" className="orderButton">
            <span>{this.state.totalProductPrice}</span>원 주문하기
          </button>
        </section>
      </div>
    );
  }
}

export default Cart;
