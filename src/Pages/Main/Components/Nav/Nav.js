import React, { Component } from 'react';
import CharacterList from './CharactersList/CharactersList';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }

  // 데이터 로딩
  componentDidMount() {
    fetch('/public/data/character.json')
      .then(res => res.json())
      .then(res => this.state({ friends: res }));
  }

  render() {
    return (
      <div className="Nav">
        <div className="mainContainer">
          <div className="subContainer">
            <div className="navBarLeftContainer">
              <ul className="navBarLeft">
                <li className="navBarHover">
                  <a href="/#">카테고리</a>
                  <div className="navDropdown">
                    <div className="dropdownContainer">
                      <div className="allItems">
                        <div className="allItemsTitle">
                          <a href="/#">전체</a>
                        </div>
                        <div className="dropdownCharacters">
                          <div className="dropdownCharactersTitle">
                            프랜즈별
                          </div>
                          <CharacterList friends={this.state.friends} />
                          {/* <ul>
                            <li>
                              <img
                                className="friendsPic"
                                src="http://localhost:3000/images/trunk.jpg"
                                alt="/#"
                                width="70"
                                height="70"
                              />
                              <span className="tree">춘삼이</span>
                            </li>
                            <li>
                              <span className="Peach">피치피치</span>
                            </li>
                            <li>
                              <span className="Duck">덕이</span>
                            </li>
                            <li>
                              <span className="Dino">콘콘</span>
                            </li>
                            <li>
                              <span className="Bird">삐약이</span>
                            </li>
                          </ul> */}
                        </div>
                      </div>
                      <div className="elecItems">
                        <div className="elecItemsTitle">
                          <a href="/#">일렉트로닉스</a>
                        </div>
                        <ul className="elecItemsSubCategories">
                          <li>
                            <a href="/#">아이맥</a>
                          </li>
                          <li>
                            <a href="/#">태블릿</a>
                          </li>
                          <li>
                            <a href="/#">폰</a>
                          </li>
                          <li>
                            <a href="/#">워치</a>
                          </li>
                        </ul>
                      </div>
                      <div className="wearItems">
                        <div className="wearItemsTitle">
                          <a href="/#">웨어</a>
                        </div>
                        <ul className="wearItemsSubCategories">
                          <li>
                            <a href="/#">셔츠</a>
                          </li>
                          <li>
                            <a href="/#">모자</a>
                          </li>
                          <li>
                            <a href="/#">후드</a>
                          </li>
                        </ul>
                      </div>
                      <div className="livingItems">
                        <div className="livingItemsTitle">
                          <a href="/#">리빙</a>
                        </div>
                        <ul className="livingItemsSubCategories">
                          <li>
                            <a href="/#">컵</a>
                          </li>
                          <li>
                            <a href="/#">북</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="navBarBest">
                  <a href="/#">베스트</a>
                </li>
              </ul>
            </div>
            <div className="navBarHeader">
              <a href="/#">Kakao Friends Mart</a>
            </div>
            <div className="navBarRightContainer">
              <ul className="navBarRight">
                <li className="navBarSearch">
                  <div className="formGroup">
                    <div className="searchContainer">
                      <input className="searchInput" type="text" />
                      <a href="/#" className="searchButtonIcon">
                        <i class="fas fa-search" />
                      </a>
                      <div className="searchAndRecentContainer">
                        <div className="searchTrend">
                          <div className="topSearch">
                            <h4>인기검색어</h4>
                            <ol>
                              <li>
                                <a href="/#">아이맥</a>
                              </li>
                              <li>
                                <a href="/#">폰</a>
                              </li>
                              <li>
                                <a href="/#">셔츠</a>
                              </li>
                              <li>
                                <a href="/#">태블릿</a>
                              </li>
                              <li>
                                <a href="/#">후드</a>
                              </li>
                            </ol>
                          </div>
                        </div>
                        <div className="recentSearch">
                          <div className="searchResults">
                            <h4>최근 검색어</h4>
                            <div className="searchList">
                              최근 검색어가 없습니다
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="navBarUserInfo">
                  <a href="/#">
                    <i class="far fa-user" />
                  </a>
                  <div className="navBarUserSubPage">
                    <ul>
                      <li>
                        <a href="/#" className="userSubPageLogin">
                          로그인
                        </a>
                      </li>
                      <li>
                        <a href="/#" className="userSubPageOrder">
                          주문내역
                        </a>
                      </li>
                      <li>
                        <a href="/#" className="userSubPageOrder">
                          좋아요
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="navBarMyCart">
                  <a href="/#">
                    <i class="fas fa-shopping-basket" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
