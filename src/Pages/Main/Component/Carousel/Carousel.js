/* eslint-disable jsx-a11y/heading-has-content */
import React, { Component } from 'react';
import './Carousel.scss';

class Carousel extends Component {
  goToRight = () => {};
  render() {
    return (
      <div className="carouselContainer">
        <div className="carouselWrap">
          <div className="carouselItem">
            <p className="caption">KAKAO FRIENDS GOLF</p>
            <h3 className="title">
              리틀프렌즈 아이언 커버
              <br />
              커버도 컬러풀하게
            </h3>
            <p className="description">손이 가요 손이가</p>
          </div>
          <div className="carouselItem">
            <p className="caption">KAKAO FRIENDS GOLF</p>
            <h3 className="title">
              5월은 프렌즈데이
              <br />
              최대 2만원 패밀리 쿠폰팩
            </h3>
            <p className="description">회원 특가상품 보고 가세요.</p>
          </div>
          <div className="carouselItem">
            <p className="caption">KAKAO FRIENDS GOLF</p>
            <h3 className="title">
              스페셜 기프트 세트
              <br />
              골프를 사랑하는 분께 선물하세요.
            </h3>
            <p className="description">LIMITED EDITION</p>
          </div>
        </div>
        <button className="prevBtn">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button className="nextBtn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    );
  }
}

export default Carousel;
