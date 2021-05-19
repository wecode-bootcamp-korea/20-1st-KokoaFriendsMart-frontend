import React, { Component } from 'react';
import './Footer.scss';

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerWrap">
          <ul className="userInfo">
            <li>회사소개</li>
            <li>채용정보</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>고객센터</li>
          </ul>
        </div>
        <div className="footerWrap">
          <h3>(주)코코아 VX</h3>
          <ul className="bisInfo">
            <li>사업자등록번호 123-45-67890</li>
            <li>통신판매업 신고번호 제2021-경기-1234호</li>
            <li>서울시 강남구 테헤란로 427 위워크 타워(위워크 선릉 2호점)</li>
            <li>PM 조원영 </li>
            <li> 팀원: 박준모, 이지연, 전현수, 최준식, 하연주 </li>
            <li>고객센터 1234-5678 mart@kokoafriendsmart.com</li>
            <li>운영시간 월~금(평일) 10시 30분~18시</li>
          </ul>
          <h4>Copyright © Kokoa VX Corp. All rights reserved.</h4>
          <div className="icon facebook">
            <i class="fab fa-facebook"></i>
          </div>
          <div className="icon insta">
            <i class="fab fa-instagram-square"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
