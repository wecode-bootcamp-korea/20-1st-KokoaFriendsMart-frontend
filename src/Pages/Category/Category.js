import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { productApi } from '../../config';
import './Category.scss';

const gotomapper = (e, sortName, history, categoryName) => {
  const table = {
    [e.target.textCotent === sortName]: history.push(
      `/category?cname=${categoryName}&orderBy=RECENT&limit=16&offset=0`
    ),
    [e.target.textCotent === sortName]: history.push(
      `/category?cname=${categoryName}&orderBy=LIKE&limit=16&offset=0`
    ),
    [e.target.textCotent === sortName]: history.push(
      `/category?cname=${categoryName}&orderBy=PRICE&limit=16&offset=0`
    ),
    [e.target.textCotent === sortName]: history.push(
      `/category?cname=${categoryName}&orderBy=-PRICE&limit=16&offset=0`
    ),
  };
  return table.true;
};

const mapper = categoryName => {
  const table = {
    [['리빙', '컵', '책'].includes(categoryName)]: {
      id: 0,
      nextCategoryName: '',
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
      prevCategoryName: '',
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
    [['춘삼이'].includes(categoryName)]: {
      id: 4,
      nextCategoryName: '피치피치',
      prevCategoryName: '삐약이',
      backColor: '#FCCC6B',
      title: '춘삼이',
      desc1: '귀여운',
      desc2: '춘삼이!',
      mainCategory: '전체',
    },
    [['피치피치'].includes(categoryName)]: {
      id: 5,
      nextCategoryName: '덕이',
      prevCategoryName: '콘콘',
      backColor: '#F6C4BD',
      title: '피치피치',
      desc1: '피치피치',
      desc2: '다비치!',
      mainCategory: '전체',
    },
    [['덕이'].includes(categoryName)]: {
      id: 6,
      nextCategoryName: '콘콘',
      prevCategoryName: '피치피치',
      backColor: '#E4CFBC',
      title: '덕이',
      desc1: '덕이',
      desc2: '꽥꽥!',
      mainCategory: '전체',
    },
    [['콘콘'].includes(categoryName)]: {
      id: 7,
      nextCategoryName: '삐약이',
      prevCategoryName: '덕이',
      backColor: '#C5DDC6',
      title: '콘콘',
      desc1: '콘콘이는',
      desc2: '귀여워!',
      mainCategory: '전체',
    },
    [['삐약이'].includes(categoryName)]: {
      id: 8,
      nextCategoryName: '춘삼이',
      prevCategoryName: '콘콘',
      backColor: '#DCBEDD',
      title: '삐약이',
      desc1: '삐약삐약',
      desc2: '병아리!',
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
      offset: 0,
      lastPage: false,
    };
  }

  componentDidMount() {
    const categoryName = this.props.match.params.categoryName;
    const fetchDestination =
      categoryName === undefined
        ? `${productApi}?limit=16&offset=0`
        : `${productApi}?cname=${categoryName}&limit=16&offset=0`;

    fetch(fetchDestination)
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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      if (this.props.location.search.includes('order')) {
        const query =
          this.props.match.params.categoryName || this.props.location.search;
        fetch(`${productApi}${query}`)
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
        const categoryName =
          query.split('=')[query.split('=').length - 1] || '';
        fetch(`${productApi}${query}`)
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
    this.setState({
      lastPage: false,
      offset: 0,
    });
    this.props.history.push(
      `/category?&limit=16&offset=0&cname=${this.state.bannerData.prevCategoryName}`
    );
  };

  onClickNextArrow = () => {
    this.setState({
      lastPage: false,
      offset: 0,
    });
    this.props.history.push(
      `/category?&limit=16&offset=0&cname=${this.state.bannerData.nextCategoryName}`
    );
  };

  onClickFilter = e => {
    this.setState({
      lastPage: false,
      offset: 0,
    });
    if (e.target.textContent === '전체') {
      this.props.history.push(`/category?&limit=16&offset=0&cname=`);
    } else {
      this.props.history.push(
        `/category?&limit=16&offset=0&cname=${e.target.textContent}`
      );
    }
  };

  onClickSort = e => {
    this.setState({
      sortName: e.target.textContent,
      lastPage: false,
      offset: 0,
    });
    gotomapper(e, '최신순', this.props.history, this.state.categoryName);
    gotomapper(e, '인기순', this.props.history, this.state.categoryName);
    gotomapper(e, '높은가격순', this.props.history, this.state.categoryName);
    gotomapper(e, '낮은가격순', this.props.history, this.state.categoryName);
  };

  onClickPagination = () => {
    const nextOffset = 16 + this.state.offset;
    fetch(
      `${productApi}?cname=${
        this.state.categoryName || ''
      }&limit=16&offset=${nextOffset}`
    )
      .then(result => result.json())
      .then(categoryData => {
        if (categoryData.data.is_last_page) {
          this.setState({
            lastPage: true,
          });
        }
        this.setState({
          productList: this.state.productList.concat([
            ...categoryData.data.product_list,
          ]),
          productCount: categoryData.data.product_list.length,
          offset: nextOffset,
        });
      });
  };

  render() {
    const { productList, isShowSortBox, bannerData, lastPage } = this.state;

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
          <div className="productListsContainer">
            <div className="productLists">
              {productList &&
                productList.map(list => {
                  return (
                    <ProductItem key={list.id * Math.random()} list={list} />
                  );
                })}
            </div>
            <div
              className={`paginationBtn ${lastPage && 'hide'}`}
              onClick={this.onClickPagination}
            >
              더보기
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Category);
