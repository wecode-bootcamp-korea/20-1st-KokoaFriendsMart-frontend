import React, { Component } from 'react';
import './ProductReview.scss';

class ProductReview extends React.Component {
  render() {
    const { productReviewData } = this.props;
    const starAverage =
      productReviewData.reduce((acc, value) => acc + value.star, 0) /
      (productReviewData.length + 1);
    return (
      <div className="productReview">
        <div className="reviewOutbox">
          <header className="reviewTitle">
            <h3 className="title">리뷰</h3>
            <span className="reviewNum">
              <span className="countReview">{productReviewData.length}</span>건
            </span>
          </header>
          <section className="reviewContentsOutbox">
            <article className="starRate">
              <span className="starRateNum num">{starAverage}</span>
              <div className="stars">
                {Array(Math.ceil(starAverage))
                  .fill(1)
                  .map(() => {
                    return (
                      <img alt="별" src="/images/stars/star-on-line-sm.svg" />
                    );
                  })}
                {Array(5 - Math.ceil(starAverage))
                  .fill(1)
                  .map(() => {
                    return (
                      <img alt="별" src="/images/stars/star-off-line-sm.svg" />
                    );
                  })}
              </div>
              <div className="reviewPoint">
                <p>상품 리뷰 작성시 포인트를 드립니다</p>
                <p>
                  포토<strong>2,000p</strong>일반<strong>1,000p</strong>
                </p>
              </div>
            </article>
            {/* 리뷰내용 */}
            <article>
              <ul className="commentLists">
                {productReviewData.map((reviewData, index) => {
                  return (
                    <li className="commentContent" key={reviewData.id}>
                      <div className="commentHeading">
                        <div className="starRaty">
                          {Array(reviewData.star)
                            .fill(1)
                            .map(() => {
                              return (
                                <img
                                  alt="별"
                                  src="/images/stars/star-on-line-sm-gray.svg"
                                />
                              );
                            })}
                          {Array(5 - reviewData.star)
                            .fill(1)
                            .map(() => {
                              return (
                                <img
                                  alt="별"
                                  src="/images/stars/star-off-line-sm-gray.svg"
                                />
                              );
                            })}
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
