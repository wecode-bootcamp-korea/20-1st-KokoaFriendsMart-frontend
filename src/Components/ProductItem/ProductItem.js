import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './ProductItem.scss';
class ProductItem extends Component {
  constructor() {
    super();
    this.state = {
      is_liked: true,
    };
  }

  componentDidMount() {
    console.log('test');
    this.setState({
      is_liked: this.props.list.is_liked,
    });
  }

  toggleLike = id => {
    fetch(`http://api.kokoafriendsmart.com/products/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(result => result.json())
      .then(result => {
        if (result.status === 'SUCCESS') {
          fetch(`http://api.kokoafriendsmart.com/products/${id}`, {
            method: 'GET',
            headers: {
              Authorization: localStorage.getItem('accessToken'),
            },
          })
            .then(result => result.json())
            .then(result => {
              this.setState({
                is_liked: result.data && result.data.product.is_liked,
              });
            });
        }
      });
  };

  gotoProduct = () => {
    this.props.history.push(`/product/${this.props.list.id}`);
  };

  render() {
    const { list, size } = this.props;
    return (
      <div className="ProductItem">
        <div className={`item ${size}`}>
          <div onClick={this.gotoProduct} className="thum">
            <div>
              <img
                src={list.thumbnail_url}
                alt="이미지 섬네일"
                className={`productImg ${size}`}
              />
            </div>
            <span className={`label ${list.is_sale ? 'sale' : 'hide'}`}>
              SALE
            </span>
            <span className={`label ${list.is_soldout ? 'soldOut' : 'hide'}`}>
              SOLD
              <br />
              OUT
            </span>
            <span className={`label ${list.is_set ? 'set' : 'hide'}`}>SET</span>
            <span className={`label ${list.is_new ? 'new' : 'hide'}`}>NEW</span>
          </div>
          <div className="itemDesc">
            <div className={`itemTitle ${size}`}>{list.name}</div>
            <i
              onClick={() => this.toggleLike(list.id)}
              className={`fa-heart ${
                this.state.is_liked ? 'fas yellow' : 'far'
              }`}
            ></i>
            <div className={`itemPrice ${size}`}>
              {list.price.toLocaleString()}원
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductItem);
