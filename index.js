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

window.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render((
    <Router history={history}>
      <Route path='/' component={App}/>
    </Router>
  ), document.getElementById('react'));
});
