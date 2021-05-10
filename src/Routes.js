import React from 'react';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
