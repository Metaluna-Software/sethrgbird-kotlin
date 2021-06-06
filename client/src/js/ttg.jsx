import * as React from 'react';
import '../style.css';
import FirstPage from '../images/ttg/firstCover.jpg';
import FirstEdition from '../images/ttg/firstEdition.jpg'
import Triangle from '../images/ttg/triangle.jpg'
import TriangleTwo from '../images/ttg/triangleTwo.jpg'
import Survey1 from '../images/ttg/survey1.jpg'
import FirstEditionTwo from '../images/ttg/firstEditionTwo.jpg'
import FirstEditionThree from '../images/ttg/firstEditionThree.jpg'

class TTG extends React.Component {
  render() {
    return (
      <div>
        <div className={'page-section seth-section'}>
          <h1>The Triangle Gazette</h1>
          <h3>Forward</h3>
          <p className="about">My initial idea for this page on my website was to simply post online
            copies of the
            gazettes, however there is something intimate and personal about keeping them special to the neighborhood. I
            am happy to send PDFs to families of the triangle, but what I am doing on this page instead is a dive into
            the story behind the story. I will have articles and clippings from specific editions so you'll get some
            peek into the content, but not a verbatim copy. Hopefully it brings some new content for those in it since
            the beginning and some insight into what it was for others. Hope you enjoy!
          </p>
        </div>
        <div className={'page-section seth-section'}>
          <h3>The Triangle</h3>
          <p className="about">The triangle was a 2.2 mile stretch of 3 roads in Whitley County, IN where together they
            formed a triangle. It was unusual in the fact that most roads (country or city) formed squares. They were
            also all named roads where most roads in the country were numbers, so this made our neighborhood unique and
            gave us a bond. People could often be seen walking, biking or running on the triangle as it made for a
            comfortable, yet productive exercise loop.</p>
          <p className="about">Most of my content involved first writing/drawing it out and then trying to recreate it
            in the computer.
            The following was a map I had made showing where each family lived.</p>
          <p>Note: to enlarge images, right-click and open them in a new tab.</p>
          <img src={TriangleTwo} alt={'triangle'} className={'seth-tile-img'}/>
          <img src={Triangle} alt={'triangle'} className={'seth-tile-img'}/>
        </div>
        <div className={'page-section seth-section'}>
          <h3>The idea</h3>
          <p className="about">
            In 7th grade, my English teacher (Mrs. Deem) gave me an idea to start a neighborhood newspaper. She
            didn&apos;t directly suggest it, but I credit her with the seed that turned into this adventure. Of course
            my parents were very supportive as well as they always were with these <i>ideas Seth was coming up
            with</i> and I remember brain-storming ideas for sections with mom in the kitchen while making dinner.
            It was Jan 1999 and the world was a different place then and even more stuck in time was our neighborhood in
            rural
            Indiana. With most neighbors being family or friends of family it is not unfair to say we had an incredibly
            safe neighborhood. The type of place where any 7th grader could go up to anyone&apos;s front door and start
            asking the for family history, birthdays and all kinds of stuff as you'll soon see.
          </p>
          <p className="about">My friend Andrew and I started the idea for a joint-venture where we would help each
            other. He was planning
            to focus on a Dogs-only newsletter for
            the web and I would focus on my neighborhood. We even had a company name picked out <i>Design Works</i> with
            business cards! I am not sure if he ever
            got that first issue out or not and after my first issue we parted ways as he was not as motivated as me for
            this project. I had also pulled in 2 other friends to help with content so I was moving right along.</p>
          <img src={Survey1} alt={'survey'} className={'seth-tile-img'}/>
        </div>
        <div className={'page-section seth-section'}>
          <h3>The creator</h3>
          <p className="about">First, a bit about 7th grade Seth Bird. He was a straight A student through middle and
            high school. His
            confidence in his ability to write, research, complete tasks, and handle the management of running a
            newspaper were high. Failure at any of these did not
            even cross his mind. Having been using the family computer for a little over a year and learning every
            program that it came with he was just about as confident as one could be. While computers were new, I had
            been using my Aunt and Uncle&apos;s computer for homework as well as computers at school. It seems odd to
            mention that now and I feel old even writing it, but I had a natural attraction to computers and what they
            could do even on day 1.</p>
          <p className="about">I used Microsoft Publisher which had a template for a 4 page newsletter. This became
            obvious on editions
            with 5+ pages as they were a little jarring in layout. Technically they were just blank pages that I used
            the same color themes on. Yes, each
            newsletter was a different color, how fun! Even the cover sheet shown below was a unique color each month
            (as much as possible). Why were newspapers so boring? Well middle-school Seth wasn&apos;t going to let his
            be boring! Of course the library of clip-art available in Microsoft Office made it all the more colorful and
            fun.</p>
          <img src={FirstPage} alt={'ttg page 1'} className={'seth-tile-img'}/>
        </div>
        <div className={'page-section seth-section'}>
          <h3>The first issue</h3>
          <p className="about">The idea was to bring the neighborhood even closer together by filling in the gaps for
            new
            families and to just keep everyone updated. If it sounds like I was a nosey neighbor, I don&apos;t
            think that even scratches the surface of it. I <i>needed</i> to know everything that was going on. New house
            being built? I visited the construction workers weekly. Someone outside doing a project, there was Seth to
            see what was happening. It was only a natural next step to publish my findings and send it to everyone else
            in the neighborhood. Thinking back actually, just wandering up to strangers&apos; houses, introducing
            myself, then proceeding to invite myself in and just hang out seems very strange even now, but at the time I
            just did it.</p>
          <p className="about">The first issue was free (of course) and helped set the tone for what was to come. Most
            of the layout and
            sections lived on until the end. Surprisingly or not, I sort of just jumped right into it with content and
            only really introduced myself on page 4. Sometimes the headlines and pictures were confusing together, but
            overall you could read through that and learn something new each month. You can see the National News looks
            like an odd transition as it was on page 5 and I had not yet mastered getting the layout copied, nor
            changing the layout. It might seem odd to publish a section for content with no content like elected
            officials and you&apos;d be right. I was committed to my pre-determined sections even if I did not have all
            of the information for them yet. I would finally get some elected official information in the 3rd
            edition.</p>
          <p>My friend Jordan would later right my sports section as he was way more into sports than I was and he was
            happy to do it.</p>
          <img src={FirstEdition} alt={'ttg cover 1'} className={'seth-tile-img'}/>
          <img src={FirstEditionTwo} alt={'ttg cover 2'} className={'seth-tile-img'}/>
          <img src={FirstEditionThree} alt={'ttg cover 3'} className={'seth-tile-img'}/>
        </div>
        <div className={'page-section seth-section'}>
          <p className="about">Note: to enlage images, right-click and open them in a new tab.</p>
          <img src={FirstPage} alt={'ttg cover 1'} className={'seth-tile-img'}/>
        </div>
        <div className={'page-section seth-section'}>
          <p>The newspaper started off like most newspapers, with a cover story which was the biggest news item of the
            month on the triangle. Themes were usually determined by a holiday in that month. </p>
          <p>

            This was typically followed by some kind of lesser story at the bottom or sometimes I would straight up call
            out a family to provide content. It seems strange now, but my expectations of the neighbors were as high as
            my own and they had better live up to them!
            Inside content would include a recipe from a neighbor (I never searched the web, etc had to be from someone
            local). A stocks section where I had (over time) compiled a list of about 10 symbols I would track month to
            month. A weather section, which seems like an odd choice for a monthly newsletter, it was only 5 days and
            usually a day behind by the time I printed and distributed it. School Happenings which was from personal
            knowledge usually or information the school had sent home (ie school calendar). A county officials section
            (mom&apos;s idea if I remember correctly) which I liked, but unfortunetly did not get around to filling out
            until the 3rd issue so it was just a blank section. There was a Note to the Neighbor section which was
            usually me providing information to the neighborhood (setting those expectations as usual). The friendly
            neighbor section would do a deep-dive on a family on the Triangle.National News, which was anything that
            occurred off of the triangle. Birthdays, survey, jokes, tongue twister, guideline (so demanding). The last
            pages were Pets and Sports, but not in every issue.</p>
          <p className="about">Note: to enlage images, right-click and open them in a new tab.</p>
          <img src={FirstPage} alt={'ttg cover 1'} className={'seth-tile-img'}/>
        </div>
      </div>
    );
  }
}

export default TTG;
