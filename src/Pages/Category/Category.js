import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { categoryApi } from '../../config';
import './Category.scss';

const mapper = categoryName => {
  const table = {
    [['리빙', '컵', '책'].includes(categoryName)]: {
      id: 0,
      nextCategoryName: '전체',
      prevCategoryName: '웨어',
      backColor: '#F6CBC2',
      title: '리빙',
      desc1: '트렌디한 개발자의 필수템',
      desc2: '코코아 리빙용품을 만나보세요!',
      mainCategory: '리빙',
    },
    [['일렉트로닉', '아이맥', '태블릿', '폰', '워치'].includes(categoryName)]: {
      id: 1,
      nextCategoryName: '웨어',
      prevCategoryName: '전체',
      backColor: '#E8CBAF',
      title: '일렉트로닉',
      desc1: '요즘 개발자들의 잇템!',
      desc2: '코코아 일렉용품을 만나보세요!',
      mainCategory: '일렉트로닉',
    },
    [['웨어', '셔츠', '모자', '후드'].includes(categoryName)]: {
      id: 2,
      nextCategoryName: '리빙',
      prevCategoryName: '일렉트로닉',
      backColor: '#F4DC70',
      title: '웨어',
      desc1: '몸에 착착 맞는',
      desc2: '코코아 웨어용품을 만나보세요!',
      mainCategory: '웨어',
    },
    [['전체'].includes(categoryName)]: {
      id: 3,
      nextCategoryName: '일렉트로닉',
      prevCategoryName: '리빙',
      backColor: '#DBF4F9',
      title: '전체',
      desc1: '코코아 상품들을',
      desc2: '만나보세요!',
      mainCategory: '전체',
    },
  };
  return table.true;
};

class Category extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      isShowSortBox: false,
      categoryName: '',
      productCount: 0,
      sortName: '최신순',
      bannerData: '',
    };
  }

  componentDidMount() {
    const categoryName = this.props.match.params.categoryName || '';
    fetch(`${categoryApi}?cname=${categoryName}`)
      .then(result => result.json())
      .then(categoryData => {
        this.setState({
          productList: categoryData.data.product_list,
          productCount: categoryData.data.product_list.length,
          categoryName: categoryName,
          bannerData: mapper(categoryName || '전체'),
        });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      if (this.props.location.search.includes('order')) {
        const query =
          this.props.match.params.categoryName || this.props.location.search;
        fetch(`${categoryApi}${query}`)
          .then(result => result.json())
          .then(categoryData => {
            this.setState({
              productList: categoryData.data.product_list,
              productCount: categoryData.data.product_list.length,
            });
          });
      } else {
        const query =
          this.props.match.params.categoryName || this.props.location.search;
        const categoryName = query.split('=')[1] || '';
        fetch(`${categoryApi}${query}`)
          .then(result => result.json())
          .then(categoryData => {
            this.setState({
              productList: categoryData.data.product_list,
              productCount: categoryData.data.product_list.length,
              categoryName: categoryName || '전체',
              bannerData: mapper(categoryName || '전체'),
            });
          });
      }
    }
  }

  onClickSortToggle = () => {
    this.setState({
      isShowSortBox: !this.state.isShowSortBox,
    });
  };

  onClickPrevArrow = () => {
    this.props.history.push(
      `/category?cname=${this.state.bannerData.prevCategoryName}`
    );
  };

  onClickNextArrow = () => {
    this.props.history.push(
      `/category?cname=${this.state.bannerData.nextCategoryName}`
    );
  };

  onClickFilter = e => {
    if (e.target.textContent === '전체') {
      this.props.history.push(`/category`);
    } else {
      this.props.history.push(`/category?cname=${e.target.textContent}`);
    }
  };

  onClickSort = e => {
    this.setState({
      sortName: e.target.textContent,
    });
    if (e.target.textContent === '최신순') {
      this.props.history.push(
        `/category?cname=${this.state.categoryName}&orderBy=RECENT`
      );
    } else if (e.target.textContent === '인기순') {
      this.props.history.push(
        `/category?cname=${this.state.categoryName}&orderBy=LIKE`
      );
    } else if (e.target.textContent === '높은가격순') {
      this.props.history.push(
        `/category?cname=${this.state.categoryName}&orderBy=PRICE`
      );
    } else if (e.target.textContent === '낮은가격순') {
      this.props.history.push(
        `/category?cname=${this.state.categoryName}&orderBy=-PRICE`
      );
    }
  };

  render() {
    const { productList, isShowSortBox, bannerData } = this.state;

    return (
      <div className="Category">
        <div className="banner">
          <div
            className="bannerContainer"
            style={{ backgroundColor: `${bannerData.backColor}` }}
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
              <div className="title">{bannerData.title}</div>
              <div className="desc">
                {bannerData.desc1}
                <br />
                {bannerData.desc2}
              </div>
            </div>
          </div>
        </div>
        <div className="categoryBody">
          <div className="productFilter">
            <ul>
              {['전체', '일렉트로닉', '웨어', '리빙'].map((category, i) => {
                return category === this.state.bannerData.mainCategory ? (
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
