import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { categoryApi } from '../../config';
import './Category.scss';

class Category extends Component {
  constructor() {
    super();
    this._isMounted = false;
    this.state = {
      productList: [],
      isShowSortBox: false,
      backColor: '',
      desc1: '',
      desc2: '',
      categoryName: '',
      productCount: 0,
      sortName: '최신순',
    };
  }

  fetchAPI = (API, categoryName, sortName, e) => {
    if (categoryName) {
      fetch(API)
        .then(res => res.json())
        .then(res =>
          this.setState({
            productList: res.data,
            productCount: res.data.length,
            categoryName: categoryName,
          })
        );
    } else if (sortName) {
      fetch(API)
        .then(result => result.json())
        .then(categoryData => {
          this.setState({
            productList: categoryData.data,
            productCount: categoryData.data.length,
            sortName: e.target.textContent,
          });
        });
    } else {
      fetch(API)
        .then(result => result.json())
        .then(categoryData => {
          this.setState({
            productList: categoryData.data,
            productCount: categoryData.data.length,
          });
        });
    }
  };

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      const categoryName = this.props.match.params.categoryName || '아이맥';
      // const categoryName = '아이맥';
      this.onChangeBannerCaption(categoryName);
      this.fetchAPI(`${categoryApi}?cname=${categoryName}`, categoryName);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate(prevProps, prevStates) {
    if (prevStates.categoryName !== this.state.categoryName) {
      if (this.state.categoryName === '전체') {
        this.fetchAPI(`${categoryApi}`);
        this.onChangeBannerCaption(this.state.categoryName);
      } else {
        this.fetchAPI(`${categoryApi}?cname=${this.state.categoryName}`);
        this.onChangeBannerCaption(this.state.categoryName);
      }
    }
  }

  onChangeBannerCaption = categoryName => {
    if (['리빙', '컵', '책'].includes(categoryName)) {
      this.setState({
        backColor: '#F6CBC2',
        title: '리빙',
        desc1: '트렌디한 개발자의 필수템',
        desc2: '코코아 리빙용품을 만나보세요!',
      });
    } else if (['웨어', '셔츠', '모자', '후드'].includes(categoryName)) {
      this.setState({
        backColor: '#F4DC70',
        title: '웨어',
        desc1: '몸에 착착 맞는',
        desc2: '코코아 웨어용품을 만나보세요!',
      });
    } else if (
      ['일렉트로닉', '아이맥', '태블릿', '폰', '워치'].includes(categoryName)
    ) {
      this.setState({
        backColor: '#E8CBAF',
        title: '일렉트로닉',
        desc1: '요즘 개발자들의 잇템!',
        desc2: '코코아 일렉용품을 만나보세요!',
      });
    } else if (['전체'].includes(categoryName)) {
      this.setState({
        backColor: '#DBF4F9',
        title: '전체',
        desc1: '코코아 상품들을',
        desc2: '만나보세요!',
      });
    }
  };

  onClickSortToggle = () => {
    this.setState({
      isShowSortBox: !this.state.isShowSortBox,
    });
  };

  onClickPrevArrow = () => {
    this.onClickArrow(['전체'], '리빙');
    this.onClickArrow(['일렉트로닉', '아이맥', '태블릿', '폰', '워치'], '전체');
    this.onClickArrow(['웨어', '셔츠', '모자', '후드'], '일렉트로닉');
    this.onClickArrow(['리빙', '컵', '책'], '웨어');
  };

  onClickNextArrow = () => {
    this.onClickArrow(['전체'], '일렉트로닉');
    this.onClickArrow(['일렉트로닉', '아이맥', '태블릿', '폰', '워치'], '웨어');
    this.onClickArrow(['웨어', '셔츠', '모자', '후드'], '리빙');
    this.onClickArrow(['리빙', '컵', '책'], '전체');
  };

  onClickArrow = (currentCategoryName, willChangedName) => {
    if (currentCategoryName.includes(this.state.categoryName)) {
      this.setState({
        categoryName: willChangedName,
      });
    }
  };

  onClickFilter = e => {
    this.setState({
      categoryName: e.target.textContent,
    });
  };

  onClickSort = e => {
    if (e.target.textContent === '최신순') {
      this.fetchAPI(
        `${categoryApi}?cname=${this.state.categoryName}&orderBy=RECENT`,
        false,
        true,
        e
      );
    } else if (e.target.textContent === '인기순') {
      this.fetchAPI(
        `${categoryApi}?cname=${this.state.categoryName}&orderBy=LIKE`,
        false,
        true,
        e
      );
    } else if (e.target.textContent === '높은가격순') {
      this.fetchAPI(
        `${categoryApi}?cname=${this.state.categoryName}&orderBy=PRICE`,
        false,
        true,
        e
      );
    } else if (e.target.textContent === '낮은가격순') {
      this.fetchAPI(
        `${categoryApi}?cname=${this.state.categoryName}&orderBy=-PRICE`,
        false,
        true,
        e
      );
    }
  };
  render() {
    const { productList, isShowSortBox, categoryName } = this.state;
    let categoryFromSub;
    if (
      ['일렉트로닉', '아이맥', '태블릿', '폰', '워치'].includes(categoryName)
    ) {
      categoryFromSub = '일렉트로닉';
    } else if (['웨어', '셔츠', '모자', '후드'].includes(categoryName)) {
      categoryFromSub = '웨어';
    } else if (['리빙', '컵', '책'].includes(categoryName)) {
      categoryFromSub = '리빙';
    } else if (['전체'].includes(categoryName)) {
      categoryFromSub = '전체';
    }

    return (
      <div className="Category">
        <div className="banner">
          <div
            className="bannerContainer"
            style={{ backgroundColor: `${this.state.backColor}` }}
          >
            <div className="bannerControl">
              <div
                onClick={this.onClickPrevArrow}
                className="bannerArrow prevArrow"
              >
                <img alt="이전 버튼" src="/images/swipe-left-white.svg" />
              </div>
              <div
                onClick={this.onClickNextArrow}
                className="bannerArrow nextArrow"
              >
                <img alt="다음 버튼" src="/images/swipe-right-white.svg" />
              </div>
            </div>
            <div className="caption">
              <div className="subtitle">CATEGORY</div>
              <div className="title">{this.state.title}</div>
              <div className="desc">
                {this.state.desc1}
                <br />
                {this.state.desc2}
              </div>
            </div>
          </div>
        </div>
        <div className="categoryBody">
          <div className="productFilter">
            <ul>
              {['전체', '일렉트로닉', '웨어', '리빙'].map((category, i) => {
                return category === categoryFromSub ? (
                  <li key={i} className="active" onClick={this.onClickFilter}>
                    {category}
                  </li>
                ) : (
                  <li onClick={this.onClickFilter}>{category}</li>
                );
              })}
            </ul>
          </div>
          <div className="productLnb">
            <div className="productNum">
              총 <span>{this.state.productCount}</span>개의 상품이 조회
              되었습니다.
            </div>
            <button>
              <div className="listSort" onClick={this.onClickSortToggle}>
                {this.state.sortName}
                <span
                  className={`sortArrow ${
                    isShowSortBox ? 'clicked' : 'unClicked'
                  }`}
                ></span>
                <ul className={`sortPopup ${isShowSortBox ? '' : 'hide'}`}>
                  {['최신순', '인기순', '높은가격순', '낮은가격순'].map(
                    sortName => {
                      return <li onClick={this.onClickSort}>{sortName}</li>;
                    }
                  )}
                </ul>
              </div>
            </button>
          </div>
          <div className="productLists">
            {productList.map(list => {
              return <ProductItem key={list.id} list={list} link="/" />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Category);
