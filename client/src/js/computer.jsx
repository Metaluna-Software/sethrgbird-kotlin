import * as React from 'react';
import '../style.css';
import ComputerV1 from '../images/computerV1.jpg';
import ComputerV2 from '../images/computerV2.jpg';
import ComputerV3 from '../images/computerV3.jpg';
import ComputerV4 from '../images/computerV4.jpg';
import ComputerV5 from '../images/computerV5.jpg';
import ComputerV6 from '../images/computerV6.jpg';
import ComputerV7 from '../images/computerV7.jpg';
import ComputerV8 from '../images/computerV8.jpg';

class Computer extends React.Component {
  render() {
    return (
      <div>
        <div className={'page-section'}>
          <h6>I spend a lot of time on my computer including cleaning and upgrading it. Here is my current setup</h6>
          <div className={'row'}>
            <div className={'col-md-6'}>
              <ul>
                <li>OS: Windows 10 Pro 64 bit</li>
                <li>Case: NZXT Phantom Exclusive Black Finish w/Orange Trim ATX Full Tower</li>
                <li>Power Supply: Thermaltake ToughPower Grand Series 750W RGB</li>
                <li>Motherboard: ASUS Prime B350-Plus</li>
                <li>Processor: AMD Ryzen 7 1700X 8-core</li>
                <li>Hard Drives: 5 SSDs (I&apos;ve lost track)</li>
                <li>Memory: Ballistix 16 GB</li>
                <li>Video Card: GeForce GTX 1070</li>
                <li>Web cam: Gesma 1080P Prostream</li>
                <li>Drive: LG Super Multi Blue Blu-ray DL-RW, HD-DVD player, DVD DL-RW, CD-RW, Lightscribe
                </li>
                <li>Monitors: Samsung T220HD, Dell U2718Q</li>
                <li>Speakers: Logitech 2.1 Speakers X230</li>
                <li>Mouse: NPET M20 Gaming Mouse RGB</li>
                <li>Keyboard: Razer Blackwidow mechanical</li>
              </ul>
            </div>
            <div className={'col-md-6'}>
              <img src={ComputerV8} alt={'computer'} className={'main-computer'}/>
            </div>
          </div>
        </div>
        <div className={'page-section'}>
          <div className={'row'}>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Jan 2021</h3>
                <p>Graphics card: Nvidia GeForce GTX 1070 (I finished playing Cyberpunk and due to the shortage I
                  swapped
                  cards with Matt).</p>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Dec 2020</h3>
                <p>New graphics card: EVGA 3080</p>
              </div>
            </div>
            <div className={'col-md-4 '}>
              <div className={'seth-tile'}>
                <h3>Nov 2020</h3>
                <p>New Webcam: Gesma 1080P Prostream</p>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Dec 2019</h3>
                <p>New Motherboard: ASUS Prime B350-Plus, CPU: AMD Ryzen 7 1700X 8-core, 16 GB Ballistix Memory, Power
                  Supply Thermaltake ToughPower Grand 750W RGB</p>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Oct 2019</h3>
                <p>Swapped 2nd Monitor to be Dell U2718Q which supports 3840x2160 resolution.</p>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Jan 2018</h3>
                <p>Added 2nd monitor Samsung 226BW, upgraded video card to GeForce GTX 1060 6GB.</p>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>May 2017</h3>
                <p>Added 2nd SSD Samsung 120 GB.</p>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Dec 2015</h3>
                <p>Upgraded to Windows 10.</p>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Apr 2015</h3>
                <p>Upgraded to Windows 8.1.</p>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Dec 2013</h3>
                <p>Finally got an upgraded keyboard, mechanical now.</p>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Jan 2012</h3>
                <p> I have gone back to a full tower for the roominess and also because I bent the Thermaltake case too
                  much
                  and could no longer use the top fan (it hit the side of the case - lot of moving).</p>
                <img src={ComputerV7} alt={'computer'} className={'seth-tile-img'}/>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Sept 2011</h3>
                <p>Another 8GB of memory is added bringing the total to 16GB.</p>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>March 2011</h3>
                <p>New motherboard: GIGABYTE LGA 1156 Intel H55, processor: Intel Quad Core i7-870 Lynnfield 2.93GHz,
                  the
                  old
                  memory is replaced with 8GB DDR3.</p>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Feb 2011</h3>
                <p>New Graphics card: Radeon HD6850 1GB DDR5.</p>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Dec 2009</h3>
                <p>One of the GX2's is sold due to heating issues when both of them are used. It was a fun
                  experiment.</p>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>July 2009</h3>
                <p>New Power Supply: PC Power and Cooling Silencer 910W RMS. Another graphics card: EVGA 9800 GX2 is
                  added
                  and
                  SLI is in full swing.</p>
                <img src={ComputerV6} alt={'computer'} className={'seth-tile-img'}/>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Jan 2009</h3>
                <p>Case upgrade to a Thermaltake V9 mid-tower, it's actually very well designed and everything fit well
                  despite going smaller.</p>
                <img src={ComputerV5} alt={'computer'} className={'seth-tile-img'}/>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Sept 2008</h3>
                <p>Time to finally upgrade the ole monitor, can&apos;t be watching blu-rays on a CRT. New monitor: 22"
                  Samsung TV
                  replaces the 19" flat screen CRT. It was a beast though and I ended up with two CRTs due to an error
                  in
                  shipping they never caught. It once fell out of my car after arriving at a LAN, didn&apos;t phase it a
                  bit.</p>
                <img src={ComputerV4} alt={'computer'} className={'seth-tile-img'}/>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Aug 2008</h3>
                <p>New graphics card: EVGA 9800 GX2 1GB is purchased and replaces the x800XL.</p>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>July 2008</h3>
                <p>Blu-ray burner added and another 500GB HDD.</p>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Sept 2007</h3>
                <p>New motherboard: EVGA NVIDIA nForce 680i SLI and new processor: Intel Core2Duo E6750 Conroe 2.66GHz.
                  Memory
                  upgrade as well, now running 4GB. Upgraded power supply: PC Power and Cooling 610W RMS.</p>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Aug 2006</h3>
                <p>New case again, went full tower now because I was running out of room. This case looked better too.
                  New
                  speakers, new mouse, lighted mouse pad.</p>
                <img src={ComputerV3} alt={'computer'} className={'seth-tile-img'}/>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>June 2005</h3>
                <p>I upgraded my case because the motorized door was annoying and I needed more gauges. (Notice how the
                  first
                  case was actually used for only 1-2 months despite me owning it 6). Don&apos;t judge on wire
                  management,
                  I
                  was
                  still a noob at this.</p>
                <img src={ComputerV2} alt={'computer'} className={'seth-tile-img'}/>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>May 2005</h3>
                <p>My first build is finished and running. First graphics card was an ATI x800XL 256MB and processor was
                  an
                  Intel 3.2 Ghz P4 640 Prescott on an Intel LGA 775 board and has 2GB of memory</p>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'seth-tile'}>
                <h3>Dec 2004</h3>
                <p>This was my first case from my first build, the front has a motorized door to either show you the bay
                  drives or the gauge/power buttons. The case was purchased in Dec, but it wasn&apos;t used until
                  May</p>
                <img src={ComputerV1} alt={'computer'} className={'seth-tile-img'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Computer;
