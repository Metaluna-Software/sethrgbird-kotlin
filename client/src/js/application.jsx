// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as React from 'react';

class Application extends React.Component {
  render() {
    return (
      <p>Future home of sethrgbird.com</p>
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
