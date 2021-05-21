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
      totalPrice: 0,
    };
  }

  componentDidMount() {
    fetch('http://api.kokoafriendsmart.com/orders?orderType=IN_CART', {
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(cartProductData => {
        if (
          !cartProductData.status == 'UNAUTHORIZED_ERROR' ||
          cartProductData.status === 'SUCCESS'
        ) {
          this.setState({
            cartProductData: cartProductData.data.order_list,
          });
        } else {
          this.setState({
            cartProductData: [],
          });
        }
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

  totalPrice = cartProductData => {
    const productPrice = cartProductData.map(
      (el, i) => el.origin_price * el.quantity
    );
    return productPrice.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  };

  //카트에서 주문하기 버튼
  onClickOderBtn = () => {
    console.log(this.state.cartProductData);
    const currentCart = [];
    this.state.cartProductData.forEach(el => {
      const newObj = {};
      newObj['product_id'] = el.product_id;
      newObj['quantity'] = el.quantity;
      currentCart.push(newObj);
    });
    console.log(currentCart);
    const orderData = this.state.cartProductData.map((el, i) => el.order_id);
    console.log(currentCart);
    fetch('http://api.kokoafriendsmart.com/orders', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        order_list: currentCart,
        order_type: 'IN_CART', //카트에서 수정데이터
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'SUCCESS') {
          fetch('http://api.kokoafriendsmart.com/orders', {
            method: 'PATCH',
            headers: {
              Authorization: localStorage.getItem('accessToken'),
            },
            body: JSON.stringify({
              order_id_list: orderData,
              order_type: 'PURCHASE_CART', //카트에서 주문하기 버튼
            }),
          })
            .then(res => res.json())
            .then(data => {
              if (data.status === 'SUCCESS') {
                this.props.history.push('/payment?orderType=PURCHASE_CART');
              }
            });
        }
      });

    console.log(orderData);
  };

  render() {
    const { cartProductData, isChecked, allChecked, totalPrice } = this.state;
    return (
      <div className="cart">
        <section className="cartPageOutbox">
          <section className="topBanner">
            <div className="cartDescription">
              <p className="cart">장바구니</p>
              <p>주문하실 상품 및 수량을 한번 더 확인해 주세요.</p>
            </div>
          </section>
          <section className="checkBox">
            <CheckBoxHeader
              cartProductData={cartProductData && cartProductData}
            />
            {cartProductData.map((cartProduct, index) => {
              return (
                <ProductInCart
                  index={index}
                  key={cartProduct.order_id}
                  cartProductData={cartProductData}
                  isChecked={isChecked}
                  cartProduct={cartProduct}
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
            cartProductData={cartProductData}
            totalPrice={this.totalPrice}
          />
          <button
            tupe="button"
            className="orderButton"
            onClick={this.onClickOderBtn}
          >
            <span>
              {(this.totalPrice(cartProductData) + 3000).toLocaleString()}
            </span>
            원 주문하기
          </button>
        </section>
      </div>
    );
  }
}

export default Cart;
