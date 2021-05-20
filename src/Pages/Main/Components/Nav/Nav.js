import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { productApi } from '../../../../config';
import Category from '../../../Category/Category';
import CharactersList from './CharactersList/CharactersList';
import ElecItems from './NavItems/ElecItems/ElecItems';
import LivingItems from './NavItems/LivingItems/LivingItems';
import WearItems from './NavItems/WearItems/WearItems';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      inputValue: '',
      currentLogin: '',
    };
  }

  // 프랜즈 캐릭터
  componentDidMount() {
    fetch('/data/character.json')
      .then(res => res.json())
      .then(res => this.setState({ friends: res }));
    if (localStorage.getItem('accessToken')) {
      this.setState({
        currentLogin: '로그아웃',
      });
    } else {
      this.setState({
        currentLogin: '로그인',
      });
    }
  }

  loginOutBtn = () => {
    if (localStorage.getItem('accessToken')) {
      this.setState({
        currentLogin: '로그인',
      });
      localStorage.clear();
    }
  };

  render() {
    const { history } = this.props;

    return (
      <div className="Nav">
        <div className="mainContainer">
          <div className="subContainer">
            <div className="categoryAndBestContainer">
              <ul className="categoryAndBest">
                <li className="navBarHover">
                  <Link onClick={() => history.push('/category')}>
                    카테고리
                  </Link>
                  <div className="navDropdown">
                    <div className="dropdownContainer">
                      <div className="allItems">
                        <div className="allItemsTitle">
                          <Link onClick={() => history.push('/category')}>
                            전체
                          </Link>
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
                          <Link
                            onClick={() => history.push('/category/일렉트로닉')}
                          >
                            일렉트로닉
                          </Link>
                        </div>
                        <ElecItems />
                      </div>
                      <div className="categoryItems">
                        <div className="categoryItemTitle">
                          <Link onClick={() => history.push('/category/웨어')}>
                            웨어
                          </Link>
                        </div>
                        <WearItems />
                      </div>
                      <div className="categoryItems">
                        <div className="categoryItemTitle">
                          <Link onClick={() => history.push('/category/리빙')}>
                            리빙
                          </Link>
                        </div>
                        <LivingItems />
                      </div>
                    </div>
                  </div>
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
                      <input
                        className="searchInput"
                        type="text"
                        onChange={e =>
                          this.setState({ inputValue: e.target.value })
                        }
                        value={this.state.inputValue}
                        onKeyUp={e => {
                          if (e.key === 'Enter') {
                            history.push(`/search/${this.state.inputValue}`);
                          }
                        }}
                      />
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
                              <Link
                                onClick={() => history.push('/category/아이맥')}
                              >
                                아이맥
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => history.push('/category/폰')}
                              >
                                폰
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => history.push('/category/셔츠')}
                              >
                                셔츠
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => history.push('/category/태블릿')}
                              >
                                태블릿
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => history.push('/category/후드')}
                              >
                                후드
                              </Link>
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
                        <Link
                          to="login"
                          className="userSubPageLogin"
                          onClick={this.loginOutBtn}
                        >
                          {this.state.currentLogin}
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
                  <Link to="/cart">
                    <i class="fas fa-shopping-basket" />
                  </Link>
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
