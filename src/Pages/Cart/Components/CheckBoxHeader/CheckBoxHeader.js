import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CheckBoxHeader.scss';

class CheckBoxHeader extends React.Component {
  render() {
    return (
      <div className="checkBoxHeader">
        <input className="check" type="checkBox" />
        <span className="totalChoice">전체선택</span>
        <span className="choiceNum">(선택개수/총개수)</span>
        <span className="choiceOption">옵션</span>
        <span className="choiceQuantity">수량</span>
        <span className="productTotal">상품금액</span>
        <a className="deleteAll">전체삭제</a>
      </div>
    );
  }
}
export default CheckBoxHeader;
