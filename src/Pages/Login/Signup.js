import React, { Component } from 'react';
import './Signup.scss';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      phone_number: '',
    };
  }

  fetch = e => {
    e.preventDefault();
    fetch('http://10.58.2.175:9000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        phone_number: this.state.phone_number,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(result => console.log(result));
  };

  inputHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, name, phone_number } = this.state;
    return (
      <div className="signupWrap">
        <div className="signup">
          <h1 className="logo">kokoa</h1>
          <form className="inputFrom" onSubmit={this.fetch}>
            <h1>코코아 계정 정보를 입력해 주세요.</h1>
            <div className="inputWrap">
              <h2>코코아 계정 이메일</h2>
              <input
                name="email"
                type="email"
                placeholder="이메일 주소 입력"
                onChange={this.inputHandler}
              />
              <p
                className={
                  email.includes('@') && email.includes('.')
                    ? 'isIncludesOk'
                    : 'isIncludesNo'
                }
              >
                이메일 형식에 맞게 작성해 주세요.
              </p>
            </div>
            <div className="inputWrap">
              <h2>비밀번호</h2>
              <input
                name="password"
                type="password"
                placeholder="비밀번호(8~32자리)"
                onChange={this.inputHandler}
              />
              <p
                className={
                  password.length > 8 ? 'isIncludesOk' : 'isIncludesNo'
                }
              >
                8자리 이상 작성해 주세요.
              </p>
              <input type="password" placeholder="비밀번호 재입력" />
            </div>
            <div className="inputWrap">
              <h2>이름</h2>
              <input
                name="name"
                type="text"
                placeholder="이름을 입력해 주세요."
                onChange={this.inputHandler}
              />
            </div>
            <div className="inputWrap">
              <h2>전화번호</h2>
              <div className="inputNum">
                <select>
                  <option>+82</option>
                </select>
                <input
                  name="phone_number"
                  type="tell"
                  placeholder="전화번호"
                  onChange={this.inputHandler}
                />
              </div>
            </div>
            <button className="numBtn">인증번호 발송</button>
            <button
              disabled={
                !(
                  email.includes('@') &&
                  email.includes('.') &&
                  password.length > 8 &&
                  name.length > 1 &&
                  phone_number.length > 6
                )
              }
              className="nextBtn"
            >
              다음
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
