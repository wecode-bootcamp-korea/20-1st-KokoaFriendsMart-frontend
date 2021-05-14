import React, { Component } from 'react';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductOption from './components/ProductOption/ProductOption';
import './Product.scss';

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      productDetailImages: [],
      productInformation: {},
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
  }

  render() {
    const { productDetailImages, productInformation } = this.state;
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
                <ProductOption productInformation={productInformation} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Product;
