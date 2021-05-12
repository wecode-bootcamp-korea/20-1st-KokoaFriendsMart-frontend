import React, { Component } from 'react';

import './Product.scss';

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      productDetailImages: [],
    };
  }

  componentDidMount() {
    fetch('/data/productDetailImages.json')
      .then(res => res.json())
      .then(productPageData => {
        this.setState({
          productDetailImages: productPageData,
        });
        // console.log(this.state.productDetailPage);
      });
  }

  render() {
    // console.log(this.state.productDetailPage);
    const { productDetailImages } = this.state;
    return (
      <div className="product">
        <nav></nav>
        <section className="productContents">
          전체 페이지(리뷰, 문의까지)
          <div className="productDetail">
            디테일 페이지 (리뷰 위에까지만)
            <div className="productDetailOutbox">
              이미지 콘텐츠 있는 부분만(마진값 있음) ::before
              <div className="productDetailInnerbox">
                상위 태그 동일 ::before
                {/* product detail Images */}
                <div className="productDetailImagesOutbox">
                  <div className="productDetailImages">
                    {/* product thumbnail~~ */}
                    <div className="productThumnail">
                      <img
                        className="productThumnailImg"
                        alt="(상품이름) 이미지"
                        src=""
                      ></img>
                    </div>
                    {/* ~~~~product thumbnail*/}
                    {/* product detail images~~~*/}
                    <ul className="descriptionList">
                      <li>
                        <img
                          className="desImg"
                          alt="제품 썸네일"
                          src="images/productDetail/wear/hat1_thumbnail.png"
                        />
                      </li>
                      <li>
                        <h2>(제품 이름)</h2>
                        <p className="productDescription">
                          이젠 골프모자도 일상에서 캐주얼하게 활용하세요.
                          <br />
                          스윙 캡 라이언은 볼 캡형태의 가장 기본이 되는 라인으로
                          <br />
                          어디서든 활용이 가능합니다.
                          <br />
                          필드 위에서도, 일상에서도 어디든 잘 어울릴 수 있는
                          아이템이에요.
                          <br />
                          라이언의 스윙과 감탄사가 로고로 플레이 된 게 특징이며,
                          <br />
                          화이트 배경의 화사한 느낌을 주는 스윙 캡을 소개합니다.
                        </p>
                      </li>
                      {productDetailImages.map((imageData, index) => {
                        return (
                          <li key={imageData.id + index}>
                            <img
                              className="desImg"
                              alt={`상세이미지 ${imageData.alt}`}
                              src={`images/productDetail/wear/${imageData.img}`}
                              id={imageData.id}
                            />
                          </li>
                        );
                      })}
                      <li>
                        <h2>(제품 이름)</h2>
                        <p className="productDescription">
                          이젠 골프모자도 일상에서 캐주얼하게 활용하세요.
                          <br />
                          스윙 캡 라이언은 볼 캡형태의 가장 기본이 되는 라인으로
                          <br />
                          어디서든 활용이 가능합니다.
                          <br />
                          필드 위에서도, 일상에서도 어디든 잘 어울릴 수 있는
                          아이템이에요.
                          <br />
                          라이언의 스윙과 감탄사가 로고로 플레이 된 게 특징이며,
                          <br />
                          화이트 배경의 화사한 느낌을 주는 스윙 캡을 소개합니다.
                        </p>
                      </li>
                    </ul>
                    {/* ~~product detail images*/}
                  </div>
                </div>
                {/* product floating */}
                <aside className="FloatingOptionOutbox">
                  <div className="FloatingOptionInnerbox">
                    {/* product floating header~~~~~~*/}
                    <header className="productOptionHeading">
                      <p className="ProductCategory">(카테고리)</p>
                      <h1 className="productName">(이름)</h1>
                      <p className="ProductPrice">(가격)</p>
                      <ul>
                        <li className="saveCash">
                          <span className="title">적립캐시</span>
                          <span className="content">
                            회원 구매 시 3% 최종 금액에 따라 변동 가능
                          </span>
                        </li>
                        <li className="deliveryFee">
                          <span className="title">배송비</span>
                          <span className="content">5만원 이상 무료배송</span>
                        </li>
                      </ul>
                    </header>
                    {/* ~~~~~~product floating header*/}
                    {/* product floating Amount~~~~~*/}
                    <div className="productQuantity">
                      <span className="quantityText">수량</span>
                      <span className="quantityGroup">
                        <button className="minus">-</button>
                        <input
                          className="countNum"
                          type="text"
                          maxlength="2"
                          value="1"
                        />
                        <button className="plus">+</button>
                      </span>
                    </div>
                    {/* ~~~~product floating Amount*/}
                    {/* product floating options~~~~*/}
                    <div className="options">
                      <ul>
                        <li>
                          <img
                            class="optionImg optionOne"
                            alt="상품 옵션1"
                            src="http://localhost:3000/images/productDetail/wear/hat1.png"
                          />
                        </li>
                        <li>
                          <img
                            class="optionImg optionTwo"
                            alt="상품 옵션2"
                            src="http://localhost:3000/images/productDetail/wear/hat1.png"
                          />
                        </li>
                      </ul>
                    </div>
                    {/* ~~~~product floating options*/}
                    {/* product floating pay  ~~~~ */}
                    <div className="payOutbox">
                      <div className="payInnerbox">
                        <div className="textLeft">
                          <strong>(수량)</strong>개 상품 금액
                        </div>
                        <div className="textRight">
                          <strong>(가격)</strong>원
                        </div>
                      </div>
                    </div>
                    {/* ~~~~~product floating pay */}
                    {/* product floating bottomBtns  ~~~~ */}
                    <div className="optionButtonsOutbox">
                      <div className="optionButtons">
                        <div className="optionButtonsRow1">
                          <div>
                            <button className="likeButton bottomBtn">
                              <img alt="하트" />
                              <span>좋아요</span>
                            </button>
                          </div>
                          <div>
                            <button className="cartButton bottomBtn">
                              <span>장바구니</span>
                            </button>
                          </div>
                        </div>
                        <div className="optionButtonsRow2">
                          <button className="buyButton bottomBtn">
                            구매하기
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* ~~~~~ product floating bottomBtns*/}
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Product;

const STORY_DATA = [
  {
    img: 'hat1.png',
    alt: '1',
  },
  {
    img: 'hat2.png',
    alt: '2',
  },
  {
    img: 'hat3.png',
    alt: '3',
  },
  {
    img: 'hat4.png',
    alt: '4',
  },
  {
    img: 'hat5.png',
    alt: '5',
  },
  {
    img: 'hat6.png',
    alt: '6',
  },
  {
    img: 'hat7.png',
    alt: '7',
  },
  {
    img: 'hood1.png',
    alt: '8',
  },
  {
    img: 'hood2.png',
    alt: '9',
  },
  {
    img: 'hood3.png',
    alt: '10',
  },
  {
    img: 'hood4.png',
    alt: '11',
  },
  {
    img: 'hood5.png',
    alt: '12',
  },
  {
    img: 'hood6.png',
    alt: '13',
  },
  {
    img: 'tea1.png',
    alt: '14',
  },
  {
    img: 'tea2.png',
    alt: '15',
  },
  {
    img: 'tea3.png',
    alt: '16',
  },
  {
    img: 'tea4.png',
    alt: '17',
  },
];
