import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as React from 'react';
import '../style.css';
import Navigation from './navigation';
import About from './about';
import Home from './home';
import Favorites from './favorites';

class Application extends React.Component {
  render() {
    return (
      <div className={'container'}>
        <Router>
          <Navigation/>
          <div id="main" role="main">
            <Switch>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/favorites">
                <Favorites/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Application;
