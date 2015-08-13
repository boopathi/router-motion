import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import {history} from 'react-router/lib/BrowserHistory';

class App extends Component {
  render() {
    return <div>
      Hi there
    </div>;
  }
}

let baseHref = '/router-motion/?';
if (process.env.NODE_ENV === 'production') baseHref = '/';

window.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render((
    <Router history={history}>
      <Route path={baseHref} component={App}/>
    </Router>
  ), document.getElementById('react'));
});
