import React, { Component } from 'react';

import './ProductDetail.scss';

class ProductDetail extends React.Component {
  render() {
    console.log('디테일 페이지 props', this.props);
    const {
      productDetailImages,
      productInformation,
      moreView,
      handleMoreView,
    } = this.props;
    // const productDetail_HTMLCode = this.props.productInformation.contents;
    return (
      <div className="productDetail">
        {/* <div dangerouslySetInnerHTML={{ __html: productDetail_HTMLCode }}></div> */}
        <ul className={moreView ? 'moreView' : 'descriptionList'}>
          <li className="detailContentsList">
            <h2>{productInformation.name}</h2>
            <p className="productDescription">
              이젠 골프모자도 일상에서 캐주얼하게 활용하세요.
              <br />
              스윙 캡 라이언은 볼 캡형태의 가장 기본이 되는 라인으로
              <br />
              어디서든 활용이 가능합니다.
              <br />
              필드 위에서도, 일상에서도 어디든 잘 어울릴 수 있는 아이템이에요.
              <br />
              라이언의 스윙과 감탄사가 로고로 플레이 된 게 특징이며,
              <br />
              화이트 배경의 화사한 느낌을 주는 스윙 캡을 소개합니다.
            </p>
          </li>
          {productDetailImages.map((imageData, index) => {
            return (
              <li key={imageData.id}>
                <img
                  className="desImg"
                  alt={`상세이미지 ${imageData.alt}`}
                  src={`images/productDetail/${imageData.img}`}
                  id={imageData.id}
                />
              </li>
            );
          })}
          <li>
            <h2>{productInformation.name}</h2>
            <p className="productDescription">
              이젠 골프모자도 일상에서 캐주얼하게 활용하세요.
              <br />
              스윙 캡 라이언은 볼 캡형태의 가장 기본이 되는 라인으로
              <br />
              어디서든 활용이 가능합니다.
              <br />
              필드 위에서도, 일상에서도 어디든 잘 어울릴 수 있는 아이템이에요.
              <br />
              라이언의 스윙과 감탄사가 로고로 플레이 된 게 특징이며,
              <br />
              화이트 배경의 화사한 느낌을 주는 스윙 캡을 소개합니다.
            </p>
          </li>
        </ul>
        <div className="detailMore">
          <button
            className={moreView ? 'hiddenButton' : 'detailMoreButton'}
            onClick={() => handleMoreView(!moreView)}
          >
            상품 펼쳐보기 <i class="fas fa-chevron-down arrowDownIcon"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
