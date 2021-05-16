import React, { Component } from 'react';
import './ProductQna.scss';

class ProductQna extends React.Component {
  render() {
    return (
      <div className="productQna">
        <div className="qnaOutbox">
          <header className="qnaTitle">
            <h3 className="title">문의</h3>
            <span className="qnaNum num">
              <span className="countQna">(리뷰개수)</span>건
            </span>
          </header>
          <article>
            <ul>
              <li className="qnaContent">
                <div className="qnaHeading">
                  <img className="yellowDot" />
                  <span className="answered">(답변 완료)</span>
                  <span className="id">(작성자 아이디)</span>
                  <span className="date">(작성 날짜)</span>
                </div>
                <div className="qnaBody">
                  <div className="qnaHead">
                    <a>보이는거[배송]배송기간문의</a>
                  </div>
                  <div className="qna">
                    <div>
                      <p className="question">
                        <span>Q</span>질문 내용~~~~~~
                      </p>
                    </div>
                    <div>
                      <p className="answer">
                        <span>A</span>답변 내용~~~~~~
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="qnaContent"></li>
              <li className="qnaContent"></li>
            </ul>
          </article>
        </div>
      </div>
    );
  }
}

export default ProductQna;
