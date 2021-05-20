import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductOption from './components/ProductOption/ProductOption';
import ProductReview from './components/ProductReview/ProductReview';
import Nav from '../Main/Components/Nav/Nav';
import './Product.scss';

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      productDetailImages: [],
      productInformation: {},
      productReviewData: [],
      quantity: 1,
      moreView: false,
    };
  }

  componentDidMount() {
    const productId = this.props.match.params.id;
    fetch(
      `http://api.kokoafriendsmart.com/products/${this.props.match.params.id}`
    )
      .then(res => res.json())
      .then(productInfoData => {
        this.setState({
          productInformation: productInfoData.data.product,
        });
      });

    fetch('/data/reviewData.json')
      .then(res => res.json())
      .then(reviewData => {
        this.setState({
          productReviewData: reviewData,
        });
      });

    window.scrollTo(0, 0);
  }

  plusQuantity = () => {
    this.setState({
      quantity: Number(this.state.quantity) + 1,
    });
  };

  minusQuantity = () => {
    if (this.state.quantity === 1) return;
    this.setState({ quantity: this.state.quantity - 1 });
  };

  handleQuantityInput = e => {
    this.setState({
      quantity: e.target.value,
    });
  };

  toggleMoreView = () => {
    this.setState({ moreView: !this.state.moreView });
  };

  //상세페이지 장바구니 추가 버튼
  onClickAddCartBtn = e => {
    if (window.confirm('이 상품을 장바구니 추가하시겠습니까?')) {
      fetch('http://api.kokoafriendsmart.com/orders', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('accessToken'),
        },
        body: JSON.stringify({
          order_list: [
            {
              product_id: this.props.match.params.id,
              quantity: this.state.quantity,
            },
          ],
          order_type: 'IN_CART', //상세페이지 장바구니 추가 버튼
        }),
      });
    } else {
      e.preventDefault();
    }
  };

  render() {
    const { productInformation, productReviewData, quantity, moreView } =
      this.state;
    return (
      <div className="product">
        <Nav />
        <section className="productContents">
          <div className="productDetail">
            <div className="productDetailOutbox">
              <div className="productDetailInnerbox">
                <div className="detailImagesOutbox">
                  <div className="detailImagesInnerbox">
                    <div className="productThumnail">
                      <img
                        className="productThumnailImg"
                        alt={productInformation.name}
                        src={productInformation.thumbnail_url}
                      />
                    </div>
                    <ProductDetail
                      productInformation={productInformation}
                      moreView={moreView}
                      toggleMoreView={this.toggleMoreView}
                    />
                  </div>
                </div>
                <ProductOption
                  productInformation={productInformation}
                  quantity={quantity}
                  plusQuantity={this.plusQuantity}
                  minusQuantity={this.minusQuantity}
                  handleQuantityInput={this.handleQuantityInput}
                  onClickAddCartBtn={this.onClickAddCartBtn}
                />
              </div>
            </div>
          </div>
          <div className="bottomOutbox">
            <div className="bottomReviewQna">
              <ProductReview productReviewData={productReviewData} />
            </div>
            <aside className="nothing"></aside>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Product);
