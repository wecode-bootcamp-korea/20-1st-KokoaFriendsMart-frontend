import React, { Component } from 'react';

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
                    <ul className="descriptionList">
                      <li>
                        <h2>{productInformation.name}</h2>
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
                      <p className="ProductCategory">
                        {productInformation.category}
                      </p>
                      <h1 className="productName">{productInformation.name}</h1>
                      <p className="ProductPrice">{productInformation.price}</p>
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
          {/* 리뷰 및 문의  */}
          <div className="bottomOutbox">
            <div className="bottomReviewQna">
              <div className="reviewOutbox">
                {/* 별점 아이디 -- 날짜 */}
                <header className="reviewTitle">
                  <h3 className="title">리뷰</h3>
                  <span className="reviewNum">
                    <span className="countReview">(리뷰개수)</span>건
                  </span>
                </header>
                {/* 별점 박스 */}
                <section className="starRateBox">
                  <article className="starRate">
                    <span className="starRateNum num">(별점 평균)</span>
                    <div className="stars">
                      <img alt="" src="" />
                      <img alt="" src="" />
                      <img alt="" src="" />
                      <img alt="" src="" />
                      <img alt="" src="" />
                    </div>
                    <div className="reviewPoint">
                      <p>상품 리뷰 작성시 포인트를 드립니다</p>
                      <p>
                        포토<strong>2,000p</strong>일반<strong>1,000p</strong>
                      </p>
                    </div>
                  </article>
                  {/* 리뷰내용 -- 리뷰사진 */}
                  <article>
                    <ul>
                      <li className="commentContent">
                        <div className="commentHeading">
                          <div className="starRaty">
                            <img />
                            <img />
                            <img />
                            <img />
                            <img />
                          </div>
                          <span className="id">(작성자 아이디)</span>
                          <span className="date">(작성 날짜)</span>
                        </div>
                        <div className="commentBody">
                          <div className="comment"></div>
                          <div className="rightPicture"></div>
                        </div>
                      </li>
                      <li className="commentContent"></li>
                      <li className="commentContent"></li>
                    </ul>
                  </article>
                </section>
              </div>
              <div className="QnaOutbox">
                <header className="qnaTitle">
                  <h3 className="title">문의</h3>
                  <span className="qnaNum num">
                    <span className="countQna">(리뷰개수)</span>건
                  </span>
                </header>
                <article>
                  <ul>
                    <li className="qnaContent">
                      <div className="qnaHeading">
                        <img className="yellowDot" />
                        <span className="answered">(답변 완료)</span>
                        <span className="id">(작성자 아이디)</span>
                        <span className="date">(작성 날짜)</span>
                      </div>
                      <div className="qnaBody">
                        <div className="qnaHead">
                          <a>보이는거[배송]배송기간문의</a>
                        </div>
                        <div className="qna">
                          <div>
                            <p className="question">
                              <span>Q</span>질문 내용~~~~~~
                            </p>
                          </div>
                          <div>
                            <p className="answer">
                              <span>A</span>답변 내용~~~~~~
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="qnaContent"></li>
                    <li className="qnaContent"></li>
                  </ul>
                </article>
              </div>
            </div>
            <aside className="nothing"></aside>
          </div>
        </section>
      </div>
    );
  }
}

export default Product;
