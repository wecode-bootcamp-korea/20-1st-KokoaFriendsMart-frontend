import React, { Component } from 'react';

export class Product extends Component {
  render() {
    return (
      <div className="product">
        <article id="kakaoBody">
          전체 페이지(리뷰, 문의까지)
          <div id="productWrap">
            디테일 페이지 (리뷰 위에까지만)
            <div className="container">
              콘텐츠 있는 부분만(마진값 있음) ::before
              <div className="row">
                상위 태그 동일 ::before
                <div className="col product-content">
                  상세 정보 있는 부분만(오른쪽 sticky빼고 )(패딩 값 있음)
                  {/* product thumbnail */}
                  <div
                    id="productRollingBanner"
                    className="product-header-rolling-banner"
                  >
                    썸네일 이미지
                  </div>
                  {/* product floating */}
                  <aside id="prodOptFloating" className="prodOpt-fixed">
                    오른쪽 고정 옵션 창
                    <div className="product-options">
                      상위태그 동일(마진값만 있음)
                      {/* product floating header*/}
                      <header className="heading">
                        옵션창 heading 부분
                        <p className="category" id="goodsCategory">
                          굿즈 카테고리 넣기
                        </p>
                        <h1 className="product-name" id="goodsName">
                          굿즈 이름(레디 미니 파우치 -어피치)
                        </h1>
                        <p className="price">
                          가격(discount 적용할 수 있는 태그들 숨겨져있음)
                        </p>
                        <ul className="event">
                          list들 css플랙스의 연속~~
                          <li className="savingCash">
                            <span className="title">리스트 타이틀</span>
                            <span className="content">리스트 콘텐츠</span>
                          </li>
                          <li className="deliveryFee">
                            <span className="title">리스트 타이틀</span>
                            <span className="content">리스트 콘텐츠</span>
                          </li>
                        </ul>
                      </header>
                      <div className="quantity">
                        <span class="title">수량</span>
                        <span className="quantity-group">
                          <button class="minus">-</button>
                          <input></input>
                          <button class="plus">+</button>
                        </span>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Product;
