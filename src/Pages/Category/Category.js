import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Category.scss';

export class Category extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      isShow: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/categoryData.json')
      .then(result => result.json())
      .then(categoryData => {
        this.setState({ productList: categoryData.productList });
      });
  }

  onClickListSort = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    return (
      <div className="Category">
        <div className="banner">
          <div className="bannerControl">
            <Link to="/" className="bannerArrow prevArrow"></Link>
            <Link to="/" className="bannerArrow nextArrow"></Link>
          </div>
          <div className="caption">
            <div className="subtitle">CATEGORY</div>
            <div className="title">전체</div>
            <div className="desc">
              요즘 골퍼들의 잇템!
              <br />
              카카오프렌즈 골프 용품을 만나보세요.
            </div>
          </div>
        </div>
        <div className="categoryBody">
          <div className="productFilter">
            <ul>
              <li className="active">전체</li>
              <li>일렉</li>
              <li>웨어</li>
              <li>리빙</li>
            </ul>
          </div>
          <div className="productLnb">
            <div className="productNum">
              총 <span>000</span>개의 상품이 조회 되었습니다.
            </div>
            <button>
              <div className="listSort" onClick={this.onClickListSort}>
                최신순
                <span
                  className={`sortArrow ${
                    this.state.isShow ? 'clicked' : 'unClicked'
                  }`}
                ></span>
                <ul className={`sortPopup ${this.state.isShow ? '' : 'hide'}`}>
                  <li>최신순</li>
                  <li>인기순</li>
                  <li>높은가격순</li>
                  <li>낮은가격순</li>
                </ul>
              </div>
            </button>
          </div>
          <div className="productLists">
            {this.state.productList &&
              this.state.productList.map(list => {
                return (
                  <div className="productItem">
                    <div className="item">
                      <Link to="/" className="thum">
                        <div>
                          <img
                            src={list.imgSrc}
                            alt="이미지 섬네일"
                            className="productImg"
                          />
                        </div>
                        <span className="label sale hide">SALE</span>
                        <span className="label soldOut hide">
                          SOLD
                          <br />
                          OUT
                        </span>
                        <span className="label set hide">SET</span>
                        <span className="label new hide">NEW</span>
                      </Link>
                      <div className="itemDesc">
                        <div className="itemTitle">{list.itemTitle}</div>
                        <i
                          className={`${
                            list.isLiked
                              ? 'fas fa-heart yellow'
                              : 'far fa-heart'
                          }`}
                        ></i>
                        <div className="itemPrice">{list.itemPrice}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
