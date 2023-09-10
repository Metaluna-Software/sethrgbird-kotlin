import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as React from 'react';
import '../style.css';
import Navigation from './navigation';
import About from './about';
import Home from './home';
import Favorites from './favorites';
import Computer from './computer';
import Cars from './cars';
import TTG from './ttg';
import House from './house';
import Birds from './birds';
import Pictures from './pictures';
import Uberxb from './uberxb';
import Adoption from './adoption';

class Application extends React.Component {
  render() {
    return (
      <div className={'container'}>
        <Router>
          <div id="main" role="main">
            <Switch>
              <Route path="/about">
                <Navigation/>
                <About/>
              </Route>
              <Route path="/favorites">
                <Navigation/>
                <Favorites/>
              </Route>
              <Route path="/computer">
                <Navigation/>
                <Computer/>
              </Route>
              <Route path="/cars">
                <Navigation/>
                <Cars/>
              </Route>
              <Route path="/ttg">
                <Navigation/>
                <TTG/>
              </Route>
              <Route path="/house">
                <Navigation/>
                <House/>
              </Route>
              <Route path="/birds">
                <Navigation/>
                <Birds/>
              </Route>
              <Route path="/pictures">
                <Navigation/>
                <Pictures/>
              </Route>
              <Route path="/uberxb">
                <Uberxb/>
              </Route>
              <Route path="/adoption">
                <Adoption/>
              </Route>
              <Route path="/">
                <Navigation/>
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
