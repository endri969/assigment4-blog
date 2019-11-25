import React from 'react';
import Main from './components/Main';
import {Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import FullBlog from './components/FullBlog';

function App() {
  return (
    <div>
      <Router>
        <div className="header">
          <h1>Pace Blog</h1>
          <p>Get the latest news</p>
        </div>
        <div className="topnav">
          <Link to="/">Home</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/blog" component={FullBlog} />
        </Switch>

        <div className="footer">
          <h2>Pace Blog Footer</h2>
        </div>
      </Router>
    </div>
  );
}

export default App;
