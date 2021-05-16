import React, { Component } from 'react';
import ProductItem from '../../../../Components/ProductItem/ProductItem';
import './MdPick.scss';
import '../../../../Components/ProductItem/ProductItem.scss';

class MdPick extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch('/data/categoryData.json')
      .then(result => result.json())
      .then(categoryData => {
        this.setState({ productList: categoryData.productList });
      });
  }

  render() {
    const { productList } = this.state;
    console.log(productList);
    return (
      <div className="MdPick">
        <div className="mdPickContainer">
          <div className="titleContainer">
            <h2 className="mdPickTitle">MD's Pick</h2>
          </div>
          <div className="mdItemList">
            <div className="mdItemTitleContainer">
              <h3 className="mdItemTitle">
                라이언의
                <br />
                골프 생활
              </h3>
              <p>
                쉿! 나만 소장하고 싶은
                <br />
                골프 아이템!
              </p>
            </div>
            {productList.map(list => {
              return (
                <ProductItem
                  list={list}
                  link="/"
                  width={['210px']}
                  height={['210px']}
                  fontSize={['16px', '17px']}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MdPick;
