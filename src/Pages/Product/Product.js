import React, { Component } from 'react';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductOption from './components/ProductOption/ProductOption';
import ProductReview from './components/ProductReview/ProductReview';
import ProductQna from './components/ProductQna/ProductQna';
import './Product.scss';

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      productDetailImages: [],
      productInformation: {},
      productReviewData: [],
      quantitydefaultValue: 1,
    };
  }

  componentDidMount() {
    fetch('/data/wearImagesData.json')
      .then(res => res.json())
      .then(productPageData => {
        this.setState({
          productDetailImages: productPageData,
        });
      });
    fetch('/data/productInfoData.json')
      .then(res => res.json())
      .then(productInfoData => {
        this.setState({
          productInformation: productInfoData,
        });
      });
    fetch('/data/reviewData.json')
      .then(res => res.json())
      .then(reviewData => {
        this.setState({
          productReviewData: reviewData,
        });
        console.log(reviewData);
        console.log(this.state.productReviewData);
      });
  }

  plusQuantity = () => {
    this.setState({
      quantitydefaultValue: this.state.quantitydefaultValue + 1,
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

  render() {
    const {
      productDetailImages,
      productInformation,
      productReviewData,
      quantitydefaultValue,
    } = this.state;
    return (
      <div className="product">
        <nav></nav>
        <section className="productContents">
          전체 페이지(리뷰, 문의까지)
          <div className="productDetail">
            디테일 페이지 (리뷰 위에까지)
            <div className="productDetailOutbox">
              <div className="productDetailInnerbox">
                {/* product detail Images */}
                <div className="detailImagesOutbox">
                  <div className="detailImagesInnerbox">
                    {/* product thumbnail~~ */}
                    <div className="productThumnail">
                      <img
                        className="productThumnailImg"
                        alt="제품 썸네일"
                        src="images/productDetail/wear/hat1_thumbnail.png"
                      />
                    </div>
                    {/* ~~~~product thumbnail*/}
                    {/* product detail images~~~*/}
                    <ProductDetail
                      productDetailImages={productDetailImages}
                      productInformation={productInformation}
                    />
                    {/* ~~product detail images*/}
                  </div>
                </div>
                {/* product floating */}
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
