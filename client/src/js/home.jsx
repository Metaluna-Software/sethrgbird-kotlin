import * as React from 'react';
import '../style.css';

class Home extends React.Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div className={''}>
        <div className={'banner'}>
          <h2 className={'center'}>Seth Richard-George Bird</h2>
          <h2 className={'center'}>Letter3</h2>
        </div>
        <div className={'row'}>
          <div className={'col-md'}>
            <h3>You can find me on</h3>
            <div className={'list-group'}>
              <a className="list-group-item list-group-item-action list-group-item-secondary"
                 href={'https://www.youtube.com/channel/UClkWHUSxgoGk8DCg_iG5n0A'}>Youtube Channel 1</a>
              <a className="list-group-item list-group-item-action list-group-item-primary"
                 href={'https://www.youtube.com/channel/UCze-dm9jwDmEBnwF0PtP1KA'}>Youtube Channel 2</a>
              <a className="list-group-item list-group-item-action list-group-item-secondary"
                 href={'http://www.twitter.com/Letter3'}>Twitter</a>
              <a className="list-group-item list-group-item-action list-group-item-primary"
                 href={'http://www.linkedin.com/pub/seth-bird/10/b2a/b83'}>LinkedIn</a>
              <a className="list-group-item list-group-item-action list-group-item-secondary"
                 href={'https://www.ebay.com/usr/fester911'}>Ebay</a>
              <a className="list-group-item list-group-item-action list-group-item-primary"
                 href={'https://www.amazon.com/hz/wishlist/ls/2Q8E5CWBOUPTK?ref_=wl_share'}>Amazon</a>
              <a className="list-group-item list-group-item-action list-group-item-secondary"
                 href={'https://www.instagram.com/feakbird/'}>Instagram</a>
              <a className="list-group-item list-group-item-action list-group-item-primary"
                 href={'https://steamcommunity.com/id/letter3'}>Steam</a>
              <a className="list-group-item list-group-item-action list-group-item-secondary"
                 href={'https://gamrconnect.vgchartz.com/profile/12954/letter3/games/collection/#content'}>VG Chartz</a>
            </div>
          </div>
          <div className={'col-md'}>
            <h3>Things I&apos;m working on</h3>
            <div className={'list-group'}>
              <a className="list-group-item list-group-item-action list-group-item-secondary"
                 href={'https://www.runningaroundscreenprinting.com'}>Running Around</a>
              <a className="list-group-item list-group-item-action list-group-item-primary"
                 href={'https://www.runveteransmarathon.com'}>Veteran&apos;s Marathon</a>
              <a className="list-group-item list-group-item-action list-group-item-secondary"
                 href={'http://www.arresteddevelopmentclan.com'}>Arrested Development Clan</a>
            </div>
          </div>
        </div>
        <div className={'center'}>Created by Seth Bird {this.getYear()}</div>
      </div>
    );
  }
}

export default Home;
