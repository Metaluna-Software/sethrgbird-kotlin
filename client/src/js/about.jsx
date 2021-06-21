import * as React from 'react';
import '../style.css';

class About extends React.Component {
  render() {
    return (
      <div className={'content-section'}>
        <p className="about">
          I am married to my best friend and love of my life Matthew. We got married in Nov 2016 after being together
          since July 2013. We celebrated at our home in the Summer of 2017 with friends and family over some Kansas
          City bbq. We live in a home we purchased together in Kansas City, KS in 2014.
        </p>
        <p className="about">
          I am an Alumni of Indiana University. I have a Bachelor of Science degree in Informatics, which was my major
          and I minored in Business and Entrepreneurship at the Kelley School of Business. I am currently working for
          Cerner which I started in Jan 2010 as a Support Analyst, moved to Sr. Software Analyst to Sr. Software
          Consultant to Solution Architect to Software Engineer to Software Architect to Associate Lead Software
          Engineer and now Lead Software Engineer. Check out <a href="http://www.cerner.com/public/">Cerner</a> for
          more details. I also build and
          maintain websites in my spare time for a couple of other organizations.
        </p>
        <p className="about">
          I enjoy working on and with computers, mostly with software, but I do enjoy doing a new PC hardware build
          once in a while. Learn more about its history above.
        </p>
        <p className="about">
          I will also play video games in my spare time (who doesn&apos;t) and list of games I play/played can be found
          here:<a href="http://www.vgchartz.com/profiles/profile.php?id=12954">Games</a>.
        </p>
        <p className="about">
          I would consider myself an amateur and mild car enthusiast. I enjoy working on my cars when it&apos;s on my watch
          and not theirs and I am always up for a good trade when I see one. I am always trying something new with
          them either physical appearance or interior options or just rewiring the car to better suit my needs. The 95
          Aurora saw it all. Learn more about their history and stories with the link above.
        </p>
      </div>
    );
  }
}

export default About;
