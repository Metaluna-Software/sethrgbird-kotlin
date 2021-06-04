import * as React from 'react';
import '../style.css';
import Youtube from '../images/youtube.png';
import Twitter from '../images/twitter.png';
import LinkedIn from '../images/linkedIn.png';
import Steam from '../images/steam.jpg';
import Ebay from '../images/ebay.png';
import Amazon from '../images/amazon.png';
import Instagram from '../images/instagram.jpg';
import VGChartz from '../images/vgchartz.png';
import RA from '../images/ra.jpg';
import Veterans from '../images/veterans.jpg';
import ADC from '../images/adc.jpg';

class Home extends React.Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div className={''}>
        <div className={'page-section'}>
          <div className={'banner'}>
            <h2 className={'center'}>Seth Richard-George Bird</h2>
            <h2 className={'center'}>Letter3</h2>
          </div>
        </div>
        <div className={'page-section'}>
          <h3 className={'center'}>You can find me on</h3>
          <div className={'row'}>
            <div className={'col-md-4'}>
              <h6>Youtube Channel 1</h6>
              <a className="list-group-item list-group-item-action list-group-item-secondary seth-tile-img"
                 href={'https://www.youtube.com/channel/UClkWHUSxgoGk8DCg_iG5n0A'}><img src={Youtube}
                                                                                        alt={'youtube channel one'}/></a>
            </div>
            <div className={'col-md-4'}>
              <h6>Youtube Channel 2</h6>
              <a className="list-group-item list-group-item-action list-group-item-secondary seth-tile-img"
                 href={'https://www.youtube.com/channel/UCze-dm9jwDmEBnwF0PtP1KA'}><img src={Youtube}
                                                                                        alt={'youtube channel two'}/></a>
            </div>
            <div className={'col-md-4'}>
              <h6>Twitter</h6>
              <a className="list-group-item list-group-item-action list-group-item-secondary"
                 href={'http://www.twitter.com/Letter3'}><img src={Twitter} alt={'twitter'}/></a>
            </div>
            <div className={'col-md-4'}>
              <h6>LinkedIn</h6>
              <a className="list-group-item list-group-item-action list-group-item-secondary seth-tile-img"
                 href={'http://www.linkedin.com/pub/seth-bird/10/b2a/b83'}><img src={LinkedIn} alt={'linked in'}/></a>
            </div>
            <div className={'col-md-4'}>
              <h6>Steam</h6>
              <a className="list-group-item list-group-item-action list-group-item-secondary seth-tile-img"
                 href={'https://steamcommunity.com/id/letter3'}><img src={Steam} alt={'steam'}/></a>
            </div>
            <div className={'col-md-4'}>
              <h6>Instagram</h6>
              <a className="list-group-item list-group-item-action list-group-item-secondary seth-tile-img"
                 href={'https://www.instagram.com/feakbird'}><img src={Instagram} alt={'instagram'}/></a>
            </div>
            <div className={'col-md-4'}>
              <h6>Ebay</h6>
              <a className="list-group-item list-group-item-action list-group-item-secondary seth-tile-img"
                 href={'https://www.ebay.com/usr/fester911'}><img src={Ebay} alt={'ebay'}/></a>
            </div>
            <div className={'col-md-4'}>
              <h6>Amazon</h6>
              <a className="list-group-item list-group-item-action list-group-item-secondary seth-tile-img"
                 href={'https://www.amazon.com/hz/wishlist/ls/2Q8E5CWBOUPTK?ref_=wl_share'}><img src={Amazon}
                                                                                                 alt={'amazon wish list'}/></a>
            </div>
            <div className={'col-md-4'}>
              <h6>VG Chartz</h6>
              <a className="list-group-item list-group-item-action list-group-item-secondary seth-tile-img"
                 href={'https://gamrconnect.vgchartz.com/profile/12954/letter3/games/collection/#content'}><img
                src={VGChartz} alt={'vg chartz gamer connect'}/></a>
            </div>
          </div>
        </div>
        <div className={'page-section'}>
          <h3 className={'center'}>Things I&apos;m working on</h3>
          <div className={'row'}>
            <div className={'col-md-4'}>
              <h6>Running Around</h6>
              <a className="list-group-item list-group-item-action list-group-item-secondary seth-tile-img"
                 href={'https://www.runningaroundscreenprinting.com'}><img
                src={RA} alt={'running around screen printing site'}/></a>
            </div>
            <div className={'col-md-4'}>
              <h6>Veteran&apos;s Marathon</h6>
              <a className="list-group-item list-group-item-action list-group-item-secondary seth-tile-img"
                 href={'https://www.runveteransmarathon.com'}><img
                src={Veterans} alt={'veterans marathon site'}/></a>
            </div>
            <div className={'col-md-4'}>
              <h6>Arrested Development Clan</h6>
              <a className="list-group-item list-group-item-action list-group-item-secondary seth-tile-img"
                 href={'http://www.arresteddevelopmentclan.com'}><img
                src={ADC} alt={'ad clan site'}/></a>
            </div>
          </div>
        </div>
        <div className={'center'}>Created by Seth Bird {this.getYear()}</div>
      </div>
    );
  }
}

export default Home;
