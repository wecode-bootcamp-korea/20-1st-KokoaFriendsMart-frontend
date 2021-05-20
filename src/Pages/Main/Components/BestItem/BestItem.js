import React, { Component } from 'react';
import BestProductItem from './BestProductItem';
import './BestItem.scss';

class BestItem extends Component {
  state = {
    productData: [],
    period: '실시간',
  };

  componentDidMount() {
    fetch('/data/bestItemData.json')
      .then(result => result.json())
      .then(res => {
        this.setState({ productData: res.products_list });
      });
  }

  onClickBtn = e => {
    this.setState({
      period: e.target.textContent,
      if(period = e.target.textContent) {
        className = 'active';
      },
    });
  };

  render() {
    const { productData, period } = this.state;
    return (
      <div className="BestItem">
        <div className="sectionInfo">
          <h2 className="title">Best Item</h2>
          <ol className="subtitleContainer">
            <li className="subtitle update active" onClick={this.onClickBtn}>
              실시간
            </li>
            <li className="subtitle week" onClick={this.onClickBtn}>
              주간
            </li>
            <li className="subtitle steady" onClick={this.onClickBtn}>
              스테디셀러
            </li>
          </ol>
          <div className="more">베스트 상품 더 보기</div>
        </div>
        <div className="sectionContents">
          {this.state.productData[period] &&
            this.state.productData[period].map(list => {
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
