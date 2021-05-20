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
    // console.log(`this.props.match.params`, this.props.match.params.id);
    // console.log(productId);
    fetch(
      `http://api.kokoafriendsmart.com/products/${this.props.match.params.id}`
    )
      .then(res => res.json())
      .then(productInfoData => {
        this.setState({
          productInformation: productInfoData.data.product,
        });
        // console.log(`productInfoData.data.product`, productInfoData);
      });

    fetch('/data/reviewData.json')
      .then(res => res.json())
      .then(reviewData => {
        this.setState({
          productReviewData: reviewData,
        });
      });
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

  render() {
    const { productInformation, productReviewData, quantity, moreView } =
      this.state;
    console.log(productInformation);
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
