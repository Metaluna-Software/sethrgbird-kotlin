import React from 'react';
import './style.css';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Application extends React.Component {
  render() {
    return (
      <p>Hello world</p>
      // <Router>
      //   <Navigation/>
      //   <div id='main' role='main'>
      //     <Switch>
      //       <Route path='/contact.html'>
      //         <ContactUs enJson={this.enJson()}/>
      //       </Route>
      //       <Route path='/veterans.html'>
      //         <VeteransPage enJson={this.enJson()}/>
      //       </Route>
      //       <Route path='/memorial.html'>
      //         <MemorialPage enJson={this.enJson()}/>
      //       </Route>
      //       <Route path='/'>
      //         <VeteransPage enJson={this.enJson()}/>
      //       </Route>
      //     </Switch>
      //   </div>
      // </Router>
    );
  }
}

export default Application;
