import React, { Component } from 'react';
import ProductItem from '../../../../Components/ProductItem/ProductItem';
import './Mdpick.scss';
import '../../../../Components/ProductItem/ProductItem.scss';

class Mdpick extends Component {
  constructor() {
    super();
    this.state = {
      products_list: [],
    };
  }

  componentDidMount() {
    fetch('/data/categoryData.json')
      .then(result => result.json())
      .then(categoryData => {
        this.setState({ products_list: categoryData.products_list });
      });
  }

  render() {
    const { productList } = this.state;
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
                  key={list.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Mdpick;
