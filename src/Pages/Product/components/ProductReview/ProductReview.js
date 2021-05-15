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
                <img alt="별" src="/images/starEmpty.svg" />
                <img alt="별" src="/images/starEmpty.svg" />
                <img alt="별" src="/images/starEmpty.svg" />
                <img alt="별" src="/images/starEmpty.svg" />
                <img alt="별" src="/images/starEmpty.svg" />
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
                          <img alt="별" src="" />
                          <img alt="별" src="" />
                          <img alt="별" src="" />
                          <img alt="별" src="" />
                          <img alt="별" src="" />
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
                            src={`images/productDetail/${reviewData.reviewImg.imgSrc}`}
                          />
                          <img
                            alt={`리뷰 ${reviewData.reviewImg.imgAlt}`}
                            src={`images/productDetail/${reviewData.reviewImg.imgSrc}`}
                          />
                          <img
                            alt={`리뷰 ${reviewData.reviewImg.imgAlt}`}
                            src={`images/productDetail/${reviewData.reviewImg.imgSrc}`}
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
