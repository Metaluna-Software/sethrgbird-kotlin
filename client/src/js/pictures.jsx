import * as React from 'react';
import Squirrel from '../images/pictures/squirrel.jpg';
import pondLilly from '../images/pictures/lilly.jpg';
import '../style.css';

class Pictures extends React.Component {
  render() {
    return (
      <div className={'content-section bird-page'}>

        <div className={'row'}>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/squirrel.jpg'><img src={Squirrel} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Squirrel</h4>
            <h6></h6>
            <h6><i>August 29th 2021</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/lilly.JPG'><img src={pondLilly} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Lilly</h4>
            <h6></h6>
            <h6><i>August 29th 2021</i></h6>

          </div>
        </div>
      </div>
    );
  }
}

export default Pictures;
