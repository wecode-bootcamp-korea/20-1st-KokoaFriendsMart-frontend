import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProductItem from '../../../../Components/ProductItem/ProductItem';
import { productApi } from '../../../../config';
import './Search.scss';

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      isShowSortBox: false,
    };
  }

  componentDidMount() {
    const categoryName = this.props.match.params.categoryName || '';
    fetch(`${productApi}?search=${categoryName}`)
      .then(res => res.json())
      .then(res => this.setState({ productList: res.data.product_list }));
  }

  onClickListSort = () => {
    this.setState({
      isShowSortBox: !this.state.isShowSortBox,
    });
  };

  render() {
    const { productList, isShowSortBox } = this.state;
    return (
      <div className="Category">
        <div className="banner">
          <div className="bannerContainer">
            <div className="caption">
              <div className="subtitle">SEARCH</div>
              <div className="title">검색결과</div>
              {/* <div className="desc">
                코코아마트에만 있는 커스텀 아이템들!
                <br />
                카카오프렌즈 골프 용품을 만나보세요.
              </div> */}
            </div>
          </div>
        </div>
        <div className="categoryBody">
          <div className="productLnb">
            <div className="productNum">
              총 <span>000</span>개의 상품이 조회 되었습니다.
            </div>
            <button>
              <div className="listSort" onClick={this.onClickListSort}>
                최신순
                <span
                  className={`sortArrow ${
                    isShowSortBox ? 'clicked' : 'unClicked'
                  }`}
                ></span>
                <ul className={`sortPopup ${isShowSortBox ? '' : 'hide'}`}>
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
              return <ProductItem key={list.id} list={list} link="/" />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
