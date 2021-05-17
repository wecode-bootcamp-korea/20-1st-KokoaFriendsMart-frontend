import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { categoryApi } from '../../config';
import './Category.scss';

export class Category extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      isShow: false,
      // categoryData: {},
    };
  }

  // componentDidMount() {
  //   const categoryName = this.props.match.params.categoryName || '';
  //   fetch(`${categoryApi}?cname=${categoryName}`)
  //     .then(res => res.json())
  //     .then(res => this.setState({ productList: res.data }));
  //   // .then(res => this.setState({ categoryData: res }));
  // }

  componentDidMount() {
    const categoryName = this.props.match.params.categoryName;
    fetch(`${categoryApi}?cname=${categoryName}`)
      .then(res => res.json())
      .then(res => this.setState({ productList: res.data }));
    // .then(res => this.setState({ categoryData: res }));
  }

  onClickListSort = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    const { productList, isShow } = this.state;
    return (
      <div className="Category">
        <div className="banner">
          <div className="bannerControl">
            <Link to="/" className="bannerArrow prevArrow" />
            <Link to="/" className="bannerArrow nextArrow" />
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
                  className={`sortArrow ${isShow ? 'clicked' : 'unClicked'}`}
                ></span>
                <ul className={`sortPopup ${isShow ? '' : 'hide'}`}>
                  <li>최신순</li>
                  <li>인기순</li>
                  <li>높은가격순</li>
                  <li>낮은가격순</li>
                </ul>
              </div>
            </button>
          </div>
          <div className="productLists">
            {productList.map(list => {
              return (
                <div className="productItem" key={list.id}>
                  <div className="item">
                    <Link to="/" className="thum">
                      <div>
                        <img
                          src={list.thumbnail_url}
                          alt="이미지 섬네일"
                          className="productImg"
                        />
                      </div>
                      <span
                        className={`label ${list.isSaled ? 'sale' : 'hide'}`}
                      >
                        SALE
                      </span>
                      <span
                        className={`label ${
                          list.isSoldOut ? 'soldOut' : 'hide'
                        }`}
                      >
                        SOLD
                        <br />
                        OUT
                      </span>
                      <span className={`label ${list.isSet ? 'set' : 'hide'}`}>
                        SET
                      </span>
                      <span className={`label ${list.isNew ? 'new' : 'hide'}`}>
                        NEW
                      </span>
                    </Link>
                    <div className="itemDesc">
                      <div className="itemTitle">{list.itemTitle}</div>
                      <i
                        className={`fa-heart ${
                          list.isLiked ? 'fas yellow' : 'far'
                        }`}
                      ></i>
                      <div className="itemPrice">
                        {list.Price.toLocaleString()}원
                      </div>
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
