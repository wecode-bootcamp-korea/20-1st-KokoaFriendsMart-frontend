import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Pages/Main/Components/Nav/Nav';
import Main from './Pages/Main/Main';
import Category from './Pages/Category/Category';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Product from './Pages/Product/Product';
import Payment from './Pages/Payment/Payment';
import Search from './Pages/Main/Components/Nav/Search';
import Footer from './Pages/Footer/Footer';
import Cart from './Pages/Cart/Cart';
import Orderlist from './Pages/Orderlist/Orderlist';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/category/:categoryName" component={Category} />
          <Route exact path="/search/:categoryName" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/orderlist" component={Orderlist} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
