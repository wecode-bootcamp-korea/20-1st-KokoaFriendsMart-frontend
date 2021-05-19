import React, { Component } from 'react';
import BestProductItem from './BestProductItem';
import './BestItem.scss';

class BestItem extends Component {
  state = {
    productData: [],
  };

  componentDidMount() {
    this.onFetchApi();
  }

  onFetchApi = () => {
    fetch('/public/data/categoryData.json')
      .then(result => result.json())
      .then(({ products_list }) => {
        const productData = products_list.map((data, i) => ({
          ...data,
          bestCount: i + 1,
        }));
        this.setState({ productData });
      });
  };

  render() {
    const { productData } = this.state;
    return (
      <div className="BestItem">
        <div className="sectionInfo">
          <h2 className="title">Best Item</h2>
          <ol className="subtitleContainer">
            <li className="subtitle update active">실시간</li>
            <li className="subtitle week">주간</li>
            <li className="subtitle steady">스테디셀러</li>
          </ol>
          <div className="more">베스트 상품 더 보기</div>
        </div>
        <div className="sectionContents">
          {productData.map(list => {
            return (
              <BestProductItem
                key={list.id}
                list={list}
                link="/"
                bestCount={list.bestCount}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BestItem;
