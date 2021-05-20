import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CheckBoxHeader.scss';

class CheckBoxHeader extends React.Component {
  render() {
    const { cartProductData, deleteAll, allChecked, isChecked, checkedNum } =
      this.props;

    return (
      <div className="checkBoxHeader">
        {/* <input
          className="check"
          type="checkBox"
          // checked={checkedNum(isChecked) === cartProductData.length}
        /> */}
        <span className="totalChoice">전체선택</span>
        {/* <span className="choiceNum">{` (${checkedNum(isChecked)}/${
          cartProductData.length
        }) `}</span> */}
        <span className="choiceOption">옵션</span>
        <span className="choiceQuantity">수량</span>
        <span className="productTotal">상품금액</span>
        <button
          className="deleteAll"
          type="button"
          onClick={e => {
            if (
              window.confirm(
                '장바구니의 상품이 모두 삭제됩니다. 정말 삭제하시겠습니까?'
              )
            ) {
              const newList = [...cartProductData];
              newList.splice(0, newList.length); //빈배열 만들기 위해
              deleteAll(newList);
            }
          }}
        >
          전체삭제
        </button>
      </div>
    );
  }
}
export default CheckBoxHeader;
