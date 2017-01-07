import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import IssueListPage from './containers/IssueListPage';
import IssueDetailPage from './containers/IssueDetailPage';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={IssueListPage}/>
      <Route path="/issue/:issueId" component={IssueDetailPage}/>
    </Route>
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
