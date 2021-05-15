import React, { Component } from 'react';

import './ProductReview.scss';

class ProductReview extends React.Component {
  render() {
    const { productReviewData } = this.props;
    return (
      <div className="productReview">
        <div className="reviewOutbox">
          {/* 별점 아이디 -- 날짜 */}
          <header className="reviewTitle">
            <h3 className="title">리뷰</h3>
            <span className="reviewNum">
              <span className="countReview">(리뷰개수)</span>건
            </span>
          </header>
          {/* 리뷰 콘텐츠 감싸고 있는 박스 */}
          <section className="reviewContentsOutbox">
            {/* 별점 박스 */}
            <article className="starRate">
              <span className="starRateNum num">(별점)</span>
              <div className="stars">
                <img alt="별" src="/images/stars/star-on-line-sm.svg" />
                <img alt="별" src="/images/stars/star-on-line-sm.svg" />
                <img alt="별" src="/images/stars/star-on-line-sm.svg" />
                <img alt="별" src="/images/stars/star-on-line-sm.svg" />
                <img alt="별" src="/images/stars/star-on-line-sm.svg" />
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
              <ul className="commentLists">
                {productReviewData.map((reviewData, index) => {
                  return (
                    <li className="commentContent" key={reviewData.id + index}>
                      <div className="commentHeading">
                        <div className="starRaty">
                          <img
                            alt="별"
                            src="/images/stars/star-on-line-sm-gray.svg"
                          />
                          <img
                            alt="별"
                            src="/images/stars/star-on-line-sm-gray.svg"
                          />
                          <img
                            alt="별"
                            src="/images/stars/star-on-line-sm-gray.svg"
                          />
                          <img
                            alt="별"
                            src="/images/stars/star-on-line-sm-gray.svg"
                          />
                          <img
                            alt="별"
                            src="/images/stars/star-on-line-sm-gray.svg"
                          />
                        </div>
                        <span className="id">{reviewData.idName}</span>
                        <span className="date">{reviewData.uploadDate}</span>
                      </div>
                      <div className="commentBody">
                        <div className="comment">
                          {reviewData.reviewComment}
                        </div>
                        <div className="rightPicture">
                          <img
                            alt={`리뷰 ${reviewData.reviewImg.imgAlt}`}
                            src={`/images/productDetail/${reviewData.reviewImg.imgSrc}`}
                          />
                          <img
                            alt={`리뷰 ${reviewData.reviewImg.imgAlt}`}
                            src={`/images/productDetail/${reviewData.reviewImg.imgSrc}`}
                          />
                          <img
                            alt={`리뷰 ${reviewData.reviewImg.imgAlt}`}
                            src={`/images/productDetail/${reviewData.reviewImg.imgSrc}`}
                          />
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default ProductReview;

const STAR = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="star"
    class="svg-inline--fa fa-star fa-w-18"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path
      fill="currentColor"
      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
    ></path>
  </svg>
);
