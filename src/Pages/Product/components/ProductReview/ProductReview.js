import React, { Component } from 'react';
import StarRatyGrey from './Components/StarRatyGrey/StarRatyGrey';
import StarRatyYellow from './Components/StarRatyYellow/StarRatyYellow';
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
                <StarRatyYellow star={Math.ceil(starAverage)} />
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
                          <StarRatyGrey star={reviewData.star} />
                        </div>
                        <span className="id">{reviewData.idName}</span>
                        <span className="date">{reviewData.uploadDate}</span>
                      </div>
                      <div className="commentBody">
                        <div className="comment">
                          {reviewData.reviewComment}
                        </div>
                        <div className="reviewPicture">
                          <img
                            alt={`리뷰 ${reviewData.reviewImg.imgAlt}`}
                            src="https://i.ibb.co/pbPjH20/Electronics-Phone-Chunsam-0.png"
                          />
                          <img
                            alt={`리뷰 ${reviewData.reviewImg.imgAlt}`}
                            src="https://i.ibb.co/N6mNnv1/Electronics-Phone-Chunsam-3.png"
                          />
                          <img
                            alt={`리뷰 ${reviewData.reviewImg.imgAlt}`}
                            src="https://i.ibb.co/5903SVW/Electronics-Phone-Concon-0.png"
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
