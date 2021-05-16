import React, { Component } from 'react';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductOption from './components/ProductOption/ProductOption';
import ProductReview from './components/ProductReview/ProductReview';
import ProductQna from './components/ProductQna/ProductQna';
import Nav from '../Main/Components/Nav/Nav';
import './Product.scss';

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      productDetailImages: [],
      productInformation: {},
      productReviewData: [],
      quantitydefaultValue: 1,
      moreView: false,
    };
  }

  componentDidMount() {
    fetch('/data/electronicImagesData.json')
      .then(res => res.json())
      .then(productPageData => {
        this.setState({
          productDetailImages: productPageData,
        });
      });

    // fetch('http://192.168.0.4:8000/products/440')
    //   .then(res => res.json())
    //   .then(productInfoData => {
    //     this.setState({
    //       productInformation: productInfoData.data.product,
    //     });
    //   });

    fetch('/data/productInfoData.json')
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
  }

  plusQuantity = () => {
    this.setState({
      quantitydefaultValue: Number(this.state.quantitydefaultValue) + 1,
    });
  };

  minusQuantity = () => {
    if (this.state.quantitydefaultValue > 1) {
      this.setState({
        quantitydefaultValue: this.state.quantitydefaultValue - 1,
      });
    }
  };

  handleQuantityInput = e => {
    this.setState({
      quantitydefaultValue: e.target.value,
    });
  };

  handleMoreView = () => {
    this.setState({ moreView: !this.state.moreView });
  };

  render() {
    const {
      productDetailImages,
      productInformation,
      productReviewData,
      quantitydefaultValue,
      moreView,
    } = this.state;
    return (
      <div className="product">
        {/* <Nav /> */}
        <section className="productContents">
          전체 페이지(리뷰, 문의까지)
          <div className="productDetail">
            <div className="productDetailOutbox">
              <div className="productDetailInnerbox">
                {/* product detail Images */}
                <div className="detailImagesOutbox">
                  <div className="detailImagesInnerbox">
                    {/* product thumbnail~~ */}
                    <div className="productThumnail">
                      <img
                        className="productThumnailImg"
                        alt={productDetailImages.name}
                        src={productInformation.thumbnail_url}
                      />
                    </div>
                    {/* ~~~~product thumbnail*/}
                    <ProductDetail
                      productDetailImages={productDetailImages}
                      productInformation={productInformation}
                      moreView={moreView}
                      handleMoreView={this.handleMoreView}
                    />
                  </div>
                </div>
                <ProductOption
                  productInformation={productInformation}
                  quantitydefaultValue={quantitydefaultValue}
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
              <ProductQna />
            </div>
            <aside className="nothing"></aside>
          </div>
        </section>
      </div>
    );
  }
}

export default Product;
