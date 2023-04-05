import * as React from 'react';
import '../style.css';
import aquarium from '../images/family/aquarium.jpg';
import cats from '../images/family/cats.jpg';
import gene from '../images/family/gene.png';
import theo from '../images/family/theo.jpg';
import pond from '../images/family/pond.jpg';
import rings from '../images/family/rings.jpg';
import usPorch from '../images/family/us_porch.jpg';
import usFriendRecep from '../images/family/us_friend_reception.jpg';
import usRecepBw from '../images/family/us_reception_bw.jpg';
import usRecepWell from '../images/family/us_reception_well.jpg';
import dinner from '../images/family/dinner.jpg';
import projectGarden from '../images/family/project_garden.jpg';
import carshow from '../images/family/carshow.jpg';
import soccer from '../images/family/soccer.jpg';
import videoGames from '../images/family/video_games.jpg';
import catio from '../images/family/catio.jpg';
import painting from '../images/family/painting.jpg';
import christmas from '../images/family/christmas.jpg';
import halloween from '../images/family/halloween.jpg';
import familyOnPorch from '../images/family/family.jpg';
import bbq from '../images/family/bbq.jpg';
import livingroom from '../images/family/livingroom.jpg';
import Kubota1902 from '../images/cars/19_Kubota_02.jpg';
import tuftedTitmouse from '../images/birds/tufted_titmouse.jpg';

class Adoption extends React.Component {
  render() {
    return (
      <div className={'content-section'}>
        <h2 className={'uberxb-heading'}>Matthew and Seth visual family profile</h2>
        <h3 className={'uberxb-heading'}>Introduction</h3>
        <p><span className={'image-note'}>Note: you can open the images in a new tab to expand them.</span></p>
        <p>The Bird-Schwartz family consists of parents Seth and Matt. We met in 2013 in Leavenworth, Kansas and married
          in 2016 at our home in Kansas City, KS. Seth was born and raised in Indiana and works as
          a Software Engineer at Oracle Corp working on healthcare software.
          Matt was born and raised in Michigan and is an Operations Supervisor at Medline which is a distribution
          center for medical supplies.
        </p>
        <p>
          <img src={usPorch} alt={'us'} className={'seth-tile-img'} title={'matt and seth on the front porch swing'}/>
          <img src={usFriendRecep} alt={'us'} className={'seth-tile-img'}
               title={'seth and matt at a friends reception'}/>
          <img src={usRecepWell} alt={'us'} className={'seth-tile-img'} title={'seth and matt by the well'}/>
          <img src={rings} alt={'us'} className={'seth-tile-img'} title={'our rings'}/>
        </p>
        <p>We have 3 cats: Captain, Whopper and Mumba; a dog Theo and a hamster Gene. Theo is 80lbs and very good with
          people
          and does not bark, bite, jump or scratch. He loves kids! He loves to play fetch and chase or be chased. We
          also have an indoor fish aquarium and an outside pond with goldfish.
        </p>
        <p>
          <img src={cats} alt={'us'} className={'seth-tile-img'}
               title={'mumba, whopper, captain (front to back) the cats'}/>
          <img src={theo} alt={'us'} className={'seth-tile-img'} title={'theo the dog'}/>
          <img src={gene} alt={'us'} className={'seth-tile-img'} title={'gene the hamster'}/>
          <img src={aquarium} alt={'us'} className={'seth-tile-img'} title={'the indoor fish'}/>
          <img src={pond} alt={'us'} className={'seth-tile-img'} title={'the outdoor fish'}/>
          <img src={catio} alt={'us'} className={'seth-tile-img'} title={'catio and dog house'}/>
        </p>

        <p>We live in a safe and quiet suburb of Kansas City, KS on just under 1 acre of fenced land. Our home is 2
          story with 4 bedrooms and 2.5 bathrooms. The child’s room would be upstairs and they would have their own
          bathroom.</p>

        <p>We live down the road from the Middle and Elementary school as well as local library (all within walking
          distance). We are hoping to bring home a child that can grow, learn, heal and thrive with the stability and
          support structures we have in place. Our neighbors help us look after our house while we’re away and in
          return we watch their kids and help them get to schools on busy days for their parents. Our neighborhood has
          built a network of friendships and we know this will help all of us adapt to the new challenges that
          await. In 2017, we hosted a bbq as a celebration of our marriage and invited friends, family, and
          neighbors.</p>
        <p>
          <img src={usRecepBw} alt={'us'} className={'seth-tile-img'}
               title={'matt gets everyones attention so we can thank our guests'}/>
          <img src={familyOnPorch} alt={'us'} className={'seth-tile-img'} title={'extended family'}/>
          <img src={bbq} alt={'us'} className={'seth-tile-img'} title={'zarda bbq catering'}/>
        </p>
        <h3 className={'uberxb-heading'}>Our lifestyle</h3>
        <p>
          Weekends will entail a family activity together which might be going somewhere in Kansas City to have an
          experience or a project around the house. We will take walks as a family with Theo around the neighborhood in
          the evenings as a means of exercise and getting away from our devices. Our local parks have also been great to
          walk Theo on the weekends including the Shawnee dog park which includes a lake for Theo to swim. We go birding
          where we seek out new varieties of birds to take pictures of for our collection. Food is also an important
          part of our lifestyle including finding new places.
          There are always new things to try around the greater Kansas City region and includes, museums, car shows and
          shopping. Video games are also a part of our life and we play PC games mostly, but also console and VR.
        </p>
        <p>
          <img src={dinner} alt={'us'} className={'seth-tile-img'} title={'find new places to eat'}/>
          <img src={carshow} alt={'us'} className={'seth-tile-img'} title={'attending local car shows'}/>
          <img src={projectGarden} alt={'us'} className={'seth-tile-img'}
               title={'building new nature habitats in our yard'}/>
          <img src={soccer} alt={'us'} className={'seth-tile-img'}
               title={'sporting kc stadium is 2 miles away and is a fun weekend activity'}/>
          <img src={Kubota1902} alt={'2019 Kubota BX2380'} className={'seth-tile-img'}
               title={'Endless projects when you have a tractor'}/>
          <img src={tuftedTitmouse} alt={'bird'} className={'seth-tile-img'}
               title={'picture Matt took from our birding'}/>
          <img src={livingroom} alt={'house'} className={'seth-tile-img'} title={'our living room'}/>
          <img src={painting} alt={'house'} className={'seth-tile-img'} title={'painting on canvas by seth'}/>
          <img src={videoGames} alt={'house'} className={'seth-tile-img'} title={'non-exhaustive video game systems'}/>
        </p>
        <p>We celebrate major Christian holidays as a tradition of our upbringing and family, however we are not
          religious. Christmas and Halloween are our most celebrated holidays and decorations, candy and more can be
          found in our home around those holidays.</p>
        <img src={christmas} alt={'house'} className={'seth-tile-img'} title={'christmas decor'}/>
        <img src={halloween} alt={'house'} className={'seth-tile-img'} title={'halloween decor'}/>
        <h3 className={'uberxb-heading'}>Our goal</h3>
        <p>
          Seth and Matt would like to find a child in need of a forever family. We want to provide a safe and
          nurturing home where a kiddo can grow, heal and thrive. Our parenting skills grow everyday as
          we continue to learn from books, classes, support groups and friends. Our experience with a previous placement
          taught us more than we could have predicted and while the adoption was not successful for them, we continue to
          look for a good fit. Every child is unique and we are ready to learn and adapt to the new challenges
          ahead. We have our priorities figured out, routines established and are ready to parent together and grow our
          family.
        </p>
      </div>
    );
  }
}

export default Adoption;
