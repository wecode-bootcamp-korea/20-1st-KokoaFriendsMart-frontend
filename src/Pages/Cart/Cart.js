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
      allChecked: true,
      orderList: [],
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

  //불리언 값이 담긴 arr를 받아서 최종 가격 합을 반환한다??

  checkedProductTotalPrice = isChecked => {
    const checkedProductIndexArr = [];
    for (let i = 0; i < isChecked.length; i++) {
      if (isChecked[i]) {
        checkedProductIndexArr.push(i);
      }
    }
    const checkedProductPriceArr = checkedProductIndexArr.map(
      (checkindex, index) => {
        return (
          this.state.cartProductData[checkindex].price *
          this.state.cartProductData[checkindex].quantity
        );
      }
    );
    const checkedProductTotalPrice = checkedProductPriceArr.reduce(
      (acc, cur) => {
        return acc + cur;
      },
      0
    );
    return checkedProductTotalPrice;
  };

  // //카트에서 주문하기 버튼
  // onClickOderBtn = () => {
  //   fetch(API, {
  //     method: 'POST',
  //     headers: {
  //       Authorization: localStorage.getItem('accessToken'),
  //     },
  //     body: JSON.stringify({
  //       order_list: [
  //         {
  //           product_id: 123,
  //           quantity: 2,
  //         },
  //         {
  //           product_id: 13,
  //           quantity: 1,
  //         },
  //         {
  //           product_id: 23,
  //           quantity: 5,
  //         },
  //       ],
  //       order_type: 'PURCHASE_CART', //카트에서 주문하기 버튼
  //     }),
  //   });
  // };

  render() {
    const { cartProductData, isChecked, allChecked } = this.state;
    console.log(isChecked);

    // console.log(price);
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
              allChecked={allChecked}
              isChecked={isChecked}
            />
            {cartProductData.map((cartProduct, index) => {
              return (
                <ProductInCart
                  index={index}
                  key={cartProduct.id}
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
            isChecked={isChecked}
            checkedProductTotalPrice={this.checkedProductTotalPrice}
          />
          <button
            tupe="button"
            className="orderButton"
            onClick={this.onClickOderBtn}
          >
            <span>
              {this.checkedProductTotalPrice(isChecked).toLocaleString()}
            </span>
            원 주문하기
          </button>
        </section>
      </div>
    );
  }
}

export default Cart;
