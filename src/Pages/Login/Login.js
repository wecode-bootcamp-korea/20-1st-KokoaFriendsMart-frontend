import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loginSignupApi } from '../../config';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  requestLogin = e => {
    e.preventDefault();

    const { email, password } = this.state;
    fetch(`${loginSignupApi}/users/signin`, {
      // fetch(`http://10.58.3.88:8000/users/signin`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.data.token) {
          localStorage.setItem('accessToken', result.data.token);
          this.props.history.push('/main');
        }
      });
  };

  inputHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const emailValid = email.includes('@') && email.includes('.');
    const passwordValid = password.length > 6;
    return (
      <div className="login">
        <main>
          <div className="imgWrap">
            <h1>코코아계정 하나로 충분합니다.</h1>
            <p>
              kokoa의 모든 서비스 뿐 아니라 Melon, Daum등
              <br /> 다른 다양한 서비스까지 이제 코코아계정으로 이용해 보세요!
            </p>
            <img
              alt="kokoa"
              src="https://accounts.kakao.com/assets/weblogin/techin/retina/banner_login1-cf2eb69e8c38343e3927cd9a0c9c26ee720b83440f818080f2508935dbc90660.png"
            />
          </div>
          <div className="loginWrap">
            <h1>kokoa</h1>
            <form onSubmit={this.requestLogin}>
              <input
                type="text"
                placeholder="카카오메일 아이디, 이메일, 전화번호"
                name="email"
                onChange={this.inputHandler}
              />
              <input
                type="password"
                placeholder="비밀번호"
                name="password"
                onChange={this.inputHandler}
              />
              <Link to="/main">
                <button
                  className="loginBtn"
                  type="button"
                  disabled={!(emailValid && passwordValid)}
                >
                  로그인
                </button>
              </Link>
            </form>
            <div className="orWrap">
              <span className="or">또는</span>
            </div>
            <button className="qrCode">
              <i className="fas fa-qrcode"></i>
              QR코드 로그인
            </button>
            <div className="infoUser">
              <div className="linkJoin">
                <p>
                  <Link to="/signup">회원가입</Link>
                </p>
              </div>
              <div className="linkUser">
                <p>카카오계정</p>
                <p>비밀번호 찾기</p>
              </div>
            </div>
          </div>
        </main>
        <footer className="infoLink">
          <p>이용약관</p>
          <p>개인정보 처리방침</p>
          <p>운영정책</p>
          <p>고객센터</p>
          <p>공지사항</p>
          <p>Copyright © kokoa Corp. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default Login;
