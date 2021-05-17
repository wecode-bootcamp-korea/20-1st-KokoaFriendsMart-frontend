import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CharactersList from './CharactersList/CharactersList';
import Category from '../../../Category/Category';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      // search: '',
    };
  }

  // 프랜즈 캐릭터
  componentDidMount() {
    fetch('/data/character.json')
      .then(res => res.json())
      .then(res => this.setState({ friends: res }));
  }

  // updateSearch(event) {
  //   this.setState({ search: event.target.value.substr(0, 20) });
  // }

  render() {
    const { history } = this.props;
    // let filteredSearch = this.props.productList.filter();

    return (
      <div className="Nav">
        <div className="mainContainer">
          <div className="subContainer">
            <div className="categoryAndBestContainer">
              <ul className="categoryAndBest">
                <li className="navBarHover">
                  <a onClick={() => history.push('category')}>카테고리</a>
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
                          <CharactersList friends={this.state.friends} />
                        </div>
                      </div>
                      <div className="categoryItems">
                        <div className="categoryItemTitle">
                          <a
                            onClick={() => history.push('/category/일렉트로닉')}
                          >
                            일렉트로닉
                          </a>
                        </div>
                        <ul className="categoryItemsSubCategories">
                          <li>
                            <a onClick={() => history.push('/category/아이맥')}>
                              아이맥
                            </a>
                          </li>
                          <li>
                            <a onClick={() => history.push('/category/태블릿')}>
                              태블릿
                            </a>
                          </li>
                          <li>
                            <a onClick={() => history.push('/category/폰')}>
                              폰
                            </a>
                          </li>
                          <li>
                            <a onClick={() => history.push('/category/워치')}>
                              워치
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="categoryItems">
                        <div className="categoryItemTitle">
                          <a onClick={() => history.push('/category/웨어')}>
                            웨어
                          </a>
                        </div>
                        <ul className="categoryItemsSubCategories">
                          <li>
                            <a onClick={() => history.push('/category/셔츠')}>
                              셔츠
                            </a>
                          </li>
                          <li>
                            <a onClick={() => history.push('/category/모자')}>
                              모자
                            </a>
                          </li>
                          <li>
                            <a onClick={() => history.push('/category/후드')}>
                              후드
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="categoryItems">
                        <div className="categoryItemTitle">
                          <a onClick={() => history.push('/category/리빙')}>
                            리빙
                          </a>
                        </div>
                        <ul className="categoryItemsSubCategories">
                          <li>
                            <a onClick={() => history.push('/category/컵')}>
                              컵
                            </a>
                          </li>
                          <li>
                            <a onClick={() => history.push('/category/책')}>
                              책
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="navBarBest">
                  <a onClick={() => history.push('/category/베스트')}>베스트</a>
                </li>
              </ul>
            </div>
            <div className="navBarHeader">
              <Link to="/main">Kokoa Friends Mart</Link>
            </div>
            <div className="searchUserBasketContainer">
              <ul className="searchUserBasket">
                <li className="navBarSearch">
                  <div className="searchContainer">
                    <div className="formGroup">
                      <input className="searchInput" type="text" />
                      <a href="/#" className="searchButtonIcon">
                        <i class="fas fa-search" />
                      </a>
                    </div>
                    <div className="searchAndRecentContainer">
                      <div className="searchTrend">
                        <div className="topSearch">
                          <h4 className="topSearchTitle">인기검색어</h4>
                          <ol className="topSearchList">
                            <li>
                              <a
                                onClick={() => history.push('/category/아이맥')}
                              >
                                아이맥
                              </a>
                            </li>
                            <li>
                              <a onClick={() => history.push('/category/폰')}>
                                폰
                              </a>
                            </li>
                            <li>
                              <a onClick={() => history.push('/category/셔츠')}>
                                셔츠
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() => history.push('/category/태블릿')}
                              >
                                태블릿
                              </a>
                            </li>
                            <li>
                              <a onClick={() => history.push('/category/후드')}>
                                후드
                              </a>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div className="recentSearch">
                        <div className="searchResults">
                          <h4 className="searchResultsTitle">최근 검색어</h4>
                          <div className="searchList">
                            최근 검색어가 없습니다
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
                        <Link to="login" className="userSubPageLogin">
                          로그인
                        </Link>
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

export default withRouter(Nav);
