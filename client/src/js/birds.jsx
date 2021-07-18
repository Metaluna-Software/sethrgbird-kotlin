import * as React from 'react';
import '../style.css';

class Birds extends React.Component {
  render() {
    return (
      <div className={'content-section'}>
        <h6>The following are pictures of birds that Matt has taken</h6>
        <div className={'row'}>
          <div className={'col-md-4'}>
            <h3>Bird 1</h3>
            <h6>latin</h6>
            <p></p>
          </div>
          <div className={'col-md-4'}>
            <h3>Bird 2</h3>
            <h6>latin</h6>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Birds;
