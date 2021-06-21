import * as React from 'react';
import '../style.css';
import FirstLook1 from '../images/house/first_look_1.jpg';
import FirstLook2 from '../images/house/first_look_2.jpg';
import FirstLook3 from '../images/house/first_look_3.jpg';
import FirstLook4 from '../images/house/first_look_4.jpg';
import FirstLook5 from '../images/house/first_look_5.jpg';
import FirstLook6 from '../images/house/first_look_6.jpg';
import FirstLook7 from '../images/house/first_look_7.jpg';
import InitialCleanUp1 from '../images/house/initial_cleanup_1.jpg';
import InitialCleanUp2 from '../images/house/initial_cleanup_2.jpg';
import InitialCleanUp3 from '../images/house/initial_cleanup_3.jpg';
import Removal1 from '../images/house/removal_1.jpg';
import Removal2 from '../images/house/removal_2.jpg';
import Removal3 from '../images/house/removal_3.jpg';
import Removal4 from '../images/house/removal_4.jpg';
import Removal5 from '../images/house/removal_5.jpg';
import Removal6 from '../images/house/removal_6.jpg';
import Removal7 from '../images/house/removal_7.jpg';
import Removal8 from '../images/house/removal_8.jpg';
import Removal10 from '../images/house/removal_10.jpg';
import Removal11 from '../images/house/removal_11.jpg';
import Removal12 from '../images/house/removal_12.jpg';

class House extends React.Component {
  render() {
    return (
        <div className={'content-tile-section'}>
            <div className={'row'}>
              <div className={'col-md-6'}>
                <div className={'seth-tile'}>
                  <h3>July 2014</h3>
                  <p>The first look at the house and was taken 7/13/2014. We hadn't done much in that time, so it's a good baseline for how we received the house and property</p>
                  <iframe width="420" height="315" src="https://www.youtube.com/embed/6jIhz6Ir_yk" frameBorder="0"
                          allowFullScreen></iframe>
                </div>
              </div>
              <div className={'col-md-6'}>
                <div className={'seth-tile'}>
                  <h3>July 2014</h3>
                  <p>First look at the outside only and was taken 7/25/2014</p>
                  <iframe width="420" height="315" src="https://www.youtube.com/embed/Cl1WiKtuO1I" frameBorder="0"
                          allowFullScreen></iframe>
                </div>
              </div>
              <div className={'col-md-6'}>
                <div className={'seth-tile'}>
                  <h3>Year 1</h3>
                  <iframe width="420" height="315" src="https://www.youtube.com/embed/d0a5aplcjtE" frameBorder="0"
                          allowFullScreen></iframe>
                </div>
              </div>
              <div className={'col-md-6'}>
                <div className={'seth-tile'}>
                  <h3>Year 2</h3>
                  <iframe width="420" height="315" src="https://www.youtube.com/embed/wMRQU9mdwz8" frameBorder="0"
                          allowFullScreen></iframe>
                </div>
              </div>
              <div className={'col-md-6'}>
                <div className={'seth-tile'}>
                  <h3>Year 2.5</h3>
                  <iframe width="420" height="315" src="https://www.youtube.com/embed/x885Lihq94E" frameBorder="0"
                          allowFullScreen></iframe>
                </div>
              </div>
              <div className={'col-md-6'}>
                <div className={'seth-tile'}>
                  <h3>Year 5</h3>
                  <iframe width="420" height="315" src="https://www.youtube.com/embed/YF-TZ7XYme4" frameBorder="0"
                          allowFullScreen></iframe>
                </div>
              </div>
              <div className={'col-md-6'}>
                <div className={'seth-tile'}>
                  <h3>Year 5 - Outside</h3>
                  <iframe width="420" height="315" src="https://www.youtube.com/embed/z3Q-qE1GBns" frameBorder="0"
                          allowFullScreen></iframe>
                </div>
              </div>
              <div className={'col-md-6'}>
                <div className={'seth-tile'}>
                  <h3>Year 7</h3>
                  <iframe width="420" height="315" src="https://www.youtube.com/embed/3neld0X1BlY" frameBorder="0"
                          allowFullScreen></iframe>
                </div>
              </div>
              <div className={'col-md-6'}>
                <div className={'seth-tile'}>
                  <h3>Year 7 - Outside</h3>
                  <iframe width="420" height="315" src="https://www.youtube.com/embed/2RBrKV7b0_s" frameBorder="0"
                          allowFullScreen></iframe>
                </div>
              </div>
            </div>
          <div className={'content-section'}>
            <h3>Start</h3>
            <p>Here are some additional pictures of the upstairs kitchen and bathroom. Both have been removed now, not that I don't like pink, but come on now look at these</p>
            <img src={FirstLook1} alt={''} className={'seth-tile-img'}/>
            <img src={FirstLook2} alt={''} className={'seth-tile-img'}/>
            <img src={FirstLook3} alt={''} className={'seth-tile-img'}/>
            <img src={FirstLook4} alt={''} className={'seth-tile-img'}/>
            <img src={FirstLook5} alt={''} className={'seth-tile-img'}/>
            <img src={FirstLook6} alt={''} className={'seth-tile-img'}/>
            <img src={FirstLook7} alt={''} className={'seth-tile-img'}/>
          </div>
          <div className={'content-section'}>
            <h3>Pre-demo</h3>
            <p>We had to get the house 'cleaned up' for final inspection from the bank's appraiser. Since it was as-is from the foreclosed bank, I did the repairs. Fairly minimal overall, except 3 steel beams that had to be added to the basement wall.</p>
            <p>We didn't have to paint, but this room is going to need to be liveable for awhile, so painting it ended up being a good idea.</p>
            <p>The list also included adding trim around 4 windows and the back door (inside trim)</p>
            <p>Adding 3 pieces (half-pieces or smaller) of drywall to walls with exposed studs</p>
            <p>Front-door didn't open easily</p>
            <p>The (then main) bathroom floor was missing pieces of linoleum</p>
            <p>The back of the house had a section of missing siding</p>
            <img src={InitialCleanUp1} alt={''} className={'seth-tile-img'}/>
            <img src={InitialCleanUp2} alt={''} className={'seth-tile-img'}/>
            <img src={InitialCleanUp3} alt={''} className={'seth-tile-img'}/>
          </div>
          <div className={'content-section'}>
            <h3>Demo</h3>
            <p>The minute the appraiser left...Let the tear-down begin</p>
            <p>Trust me, putting up drywall and mud on a wall I knew was going away was frustrating, but had to be done and we made quick work of it</p>
            <p>We already signed up for Google Fiber, so had to tear off the previous era's means of TV</p>
            <img src={Removal1} alt={''} className={'seth-tile-img'}/>
            <img src={Removal2} alt={''} className={'seth-tile-img'}/>
            <img src={Removal3} alt={''} className={'seth-tile-img'}/>
            <img src={Removal4} alt={''} className={'seth-tile-img'}/>
            <img src={Removal5} alt={''} className={'seth-tile-img'}/>
            <img src={Removal6} alt={''} className={'seth-tile-img'}/>
            <img src={Removal7} alt={''} className={'seth-tile-img'}/>
            <img src={Removal8} alt={''} className={'seth-tile-img'}/>
            <img src={Removal10} alt={''} className={'seth-tile-img'}/>
            <img src={Removal11} alt={''} className={'seth-tile-img'}/>
            <img src={Removal12} alt={''} className={'seth-tile-img'}/>
          </div>
          <div className={'content-section'}>
            <h3>Stairway</h3>
            <p></p>
            <img src={FirstLook1} alt={''} className={'seth-tile-img'}/>
          </div>
          <div className={'content-section'}>
            <h3>Kitchen</h3>
            <p></p>
            <img src={FirstLook1} alt={''} className={'seth-tile-img'}/>
          </div>
          <div className={'content-section'}>
            <h3>Other Indoor Progress</h3>
            <p></p>
            <img src={FirstLook1} alt={''} className={'seth-tile-img'}/>
          </div>
          <div className={'content-section'}>
            <h3>Septic</h3>
            <p></p>
            <img src={FirstLook1} alt={''} className={'seth-tile-img'}/>
          </div>
          <div className={'content-section'}>
            <h3>Outside</h3>
            <p></p>
            <img src={FirstLook1} alt={''} className={'seth-tile-img'}/>
          </div>
          <div className={'content-section'}>
            <h3>Retaining Wall</h3>
            <p></p>
            <img src={FirstLook1} alt={''} className={'seth-tile-img'}/>
          </div>
          <div className={'content-section'}>
            <h3>HVAC</h3>
            <p></p>
            <img src={FirstLook1} alt={''} className={'seth-tile-img'}/>
          </div>
          <div className={'content-section'}>
            <h3>Pond</h3>
            <p></p>
            <img src={FirstLook1} alt={''} className={'seth-tile-img'}/>
          </div>
          <div className={'content-section'}>
            <h3>Living Room Floor</h3>
            <p></p>
            <img src={FirstLook1} alt={''} className={'seth-tile-img'}/>
          </div>
          <div className={'content-section'}>
            <h3>Main Bath</h3>
            <p></p>
            <img src={FirstLook1} alt={''} className={'seth-tile-img'}/>
          </div>
          <div className={'content-section'}>
            <h3>Basement</h3>
            <p></p>
            <img src={FirstLook1} alt={''} className={'seth-tile-img'}/>
          </div>
        </div>
    );
  }
}

export default House;
