import * as React from 'react';
import Eastern_bluebird from '../images/birds/eastern_bluebird.jpg';
import Northern_mockingbird from '../images/birds/northern_mockingbird.jpg';
import Blackcapped_chickadee from '../images/birds/black-capped_chickadee.jpg';
import Eastern_kingbird from '../images/birds/eastern_kingbird.jpg';
import RedWinged_blackbird from '../images/birds/red-winged_blackbird.jpg';
import Disckcissel from '../images/birds/dickcissel.jpg';
import Tufted_titmouse from '../images/birds/tufted_titmouse.jpg';
import Summer_tanager from '../images/birds/summer_tanager.jpg';
import Great_blue_heron from '../images/birds/great_blue_heron.jpg';
import Canada_goose from '../images/birds/canada_goose.jpg';
import House_sparrow from '../images/birds/house_sparrow.jpg';
import House_finch from '../images/birds/house_finch.jpg';
import Western_kingbird from '../images/birds/western_kingbird.jpg';
import Downy_woodpecker from '../images/birds/downy_woodpecker.jpg';
import American_crow from '../images/birds/american_crow.jpg';
import American_robin from '../images/birds/american_robin.jpg';
import Common_grackle from '../images/birds/common_grackle.jpg';
import Barred_owl from '../images/birds/barred_owl.jpg';
import Blue_jay from '../images/birds/blue_jay.jpg';
import Mourning_dove from '../images/birds/mourning_dove.jpg';
import Willet from '../images/birds/willet.jpg';
import Laughing_gull from '../images/birds/laughing_gull.jpg';
import '../style.css';

class Birds extends React.Component {
  render() {
    return (
      <div className={'content-section bird-page'}>
      
        <div className={'row'}>
          <div className={'col-md-4 centered_birds'}>
         <span class='image-wrap'>
               <a href='../assets/eastern_bluebird.jpg'> <img class ='circle' src={Eastern_bluebird} alt={''} className={'seth-tile-img-bird circle'}/></a>
          </span>
              <h4>Eastern Bluebird</h4>
              <h6>A species of Thrushes</h6>
              <h6><i>Sialia sialis</i></h6>
           
          </div>
         
         
          
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/american_robin.jpg'><img src={American_robin} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>American robin</h4>
            <h6>A species of Thrushes</h6>
            <h6><i>Turdus migratorius</i></h6>
           
          </div>
           
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/laughing_gull.jpg'><img src={Laughing_gull} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Laughing gull</h4>
            <h6>A species of Gulls</h6>
            <h6><i>Leucophaeus atricilla</i></h6>
           
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/willet.jpg'><img src={Willet} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Willet</h4>
            <h6>A species of Sandpipers</h6>
            <h6><i>Tringa semipalmata</i></h6>
           
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/mourning_dove.jpg'><img src={Mourning_dove} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Mourning dove</h4>
            <h6>A species of Dove</h6>
            <h6><i>Zenaida macroura</i></h6>
           
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/blue_jay.jpg'><img src={Blue_jay} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Blue jay</h4>
            <h6>A species of Crows and jays</h6>
            <h6><i>Cyanocitta cristata</i></h6>
           
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/barred_owl.jpg'><img src={Barred_owl} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Barred owl</h4>
            <h6>A species of True owls</h6>
            <h6><i>Strix varia</i></h6>
           
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/common_grackle.jpg'><img src={Common_grackle} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Common grackle</h4>
            <h6>A species of New world blackbirds and orioles</h6>
            <h6><i>Quiscalus quiscula</i></h6>
           
          </div>
          
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/northern_mockingbird.jpg'><img src={Northern_mockingbird} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Northern Mockingbird</h4>
            <h6>A species of Mimids</h6>
            <h6><i>Mimus polyglottos</i></h6>
         
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/black-capped_chickadee.jpg'><img src={Blackcapped_chickadee} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Black-capped Chickadee</h4>
            <h6>A species of Tits</h6>
            <h6><i>Poecile atricapllus</i></h6>
         
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/eastern_kingbird.jpg'><img src={Eastern_kingbird} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Eastern Kingbird</h4>
            <h6>A species of Tyrant flycatchers</h6>
            <h6><i>Tyrannus tyrannus</i></h6>
         
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/red-winged_blackbird.jpg'><img src={RedWinged_blackbird} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Red-winged blackbird</h4>
            <h6>A species of New world blackbirds and orioles</h6>
            <h6><i>Agelaius phoeniceus</i></h6>
         
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/dickcissel.jpg'><img src={Disckcissel} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Dickcissell</h4>
            <h6>A species of Cardinals</h6>
            <h6><i>Cardinalidae</i></h6>
         
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/tufted_titmouse.jpg'><img src={Tufted_titmouse} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Tufted titmouse</h4>
            <h6>A species of Tits</h6>
            <h6><i>Baeolophus bicolor</i></h6>
         
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/summer_tanager.jpg'><img src={Summer_tanager} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Summer tanager</h4>
            <h6>A species of Cardinals</h6>
            <h6><i>Piranga rubra</i></h6>
         
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/great_blue_heron.jpg'><img src={Great_blue_heron} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Great blue heron</h4>
            <h6>A species of Herons</h6>
            <h6><i>Ardea herodias</i></h6>
         
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/canada_goose.jpg'><img src={Canada_goose} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Canada goose</h4>
            <h6>A species of Geese</h6>
            <h6><i>Branta canadensis</i></h6>
         
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/house_sparrow.jpg'><img src={House_sparrow} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>House sparrow</h4>
            <h6>A species of Old world sparrows</h6>
            <h6><i>Passer domesticus</i></h6>
         
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/house_finch.jpg'><img src={House_finch} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>House finch</h4>
            <h6>A species of Finches</h6>
            <h6><i>Haemorhous mexicanus</i></h6>
         
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/western_kingbird.jpg'><img src={Western_kingbird} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Western kingbird</h4>
            <h6>A species of Tyrant flycatchers</h6>
            <h6><i>Tyrannus verticalis</i></h6>
         
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/downy_woodpecker.jpg'><img src={Downy_woodpecker} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Downy woodpecker</h4>
            <h6>A species of Woodpeckers</h6>
            <h6><i>Picoides pubescens</i></h6>
         
          </div>
          <div className={'col-md-4 centered_birds'}>
          <a href='../assets/american_crow.jpg'><img src={American_crow} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>American crow</h4>
            <h6>A species of Crows and jays</h6>
            <h6><i>Corvus brachyrhynchos</i></h6>
         
          </div>
        </div>
      </div>
    );
  }
}

export default Birds;
