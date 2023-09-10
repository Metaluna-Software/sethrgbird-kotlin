import * as React from 'react';
import easternBluebird from '../images/birds/eastern_bluebird.jpg';
import northernMockingbird from '../images/birds/northern_mockingbird.jpg';
import blackcappedChickadee from '../images/birds/black-capped_chickadee.jpg';
import easternKingbird from '../images/birds/eastern_kingbird.jpg';
import redWingedBlackbird from '../images/birds/red-winged_blackbird.jpg';
import disckcissel from '../images/birds/dickcissel.jpg';
import tuftedTitmouse from '../images/birds/tufted_titmouse.jpg';
import summerTanager from '../images/birds/summer_tanager.jpg';
import greatBlueHeron from '../images/birds/great_blue_heron.jpg';
import canadaGoose from '../images/birds/canada_goose.jpg';
import houseSparrow from '../images/birds/house_sparrow.jpg';
import houseFinch from '../images/birds/house_finch.jpg';
import westernKingbird from '../images/birds/western_kingbird.jpg';
import downyWoodpecker from '../images/birds/downy_woodpecker.jpg';
import americanCrow from '../images/birds/american_crow.jpg';
import slenderbilledGull from '../images/birds/slender-billed_gull.jpg';
import americanRobin from '../images/birds/american_robin.jpg';
import commonGrackle from '../images/birds/common_grackle.jpg';
import barredOwl from '../images/birds/barred_owl.jpg';
import blueJay from '../images/birds/blue_jay.jpg';
import mourningDove from '../images/birds/mourning_dove.jpg';
import willet from '../images/birds/willet.jpg';
import laughingGull from '../images/birds/laughing_gull.jpg';
import killdeer from '../images/birds/killdeer.jpg';
import ruddyShelduck from '../images/birds/ruddy_shelduck.jpg';
import mandarinDuck from '../images/birds/mandarin_duck.jpg';
import sulphurcrestedCockatoo from '../images/birds/sulphur-crested_cockatoo.jpg';
import eclectusParrot from '../images/birds/eclectus_parrot.jpg';
import blackSwan from '../images/birds/black_swan.jpg';
import strawneckedIbis from '../images/birds/straw-necked_ibis.jpg';
import americanGoldfinch from '../images/birds/american_goldfinch.jpg';
import coopersHawk from '../images/birds/coopers_hawk.jpg';
import greatEgret from '../images/birds/great_egret.jpg';
import '../style.css';

class Birds extends React.Component {
  render() {
    return (
      <div className={'content-section bird-page'}>

        <div className={'row'}>
          <div className={'col-md-4 centered_birds'}>
            <span className='image-wrap'>
              <a href='../assets/eastern_bluebird.jpg'> <img src={easternBluebird} alt={''} className={'seth-tile-img-bird circle'}/></a>
            </span>
            <h4>Eastern Bluebird</h4>
            <h6>A species of Thrushes</h6>
            <h6><i>Sialia sialis</i></h6>

          </div>

          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/american_robin.jpg'><img src={americanRobin} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>American robin</h4>
            <h6>A species of Thrushes</h6>
            <h6><i>Turdus migratorius</i></h6>
          </div>

          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/laughing_gull.jpg'><img src={laughingGull} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Laughing gull</h4>
            <h6>A species of Gulls</h6>
            <h6><i>Leucophaeus atricilla</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/willet.jpg'><img src={willet} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Willet</h4>
            <h6>A species of Sandpipers</h6>
            <h6><i>Tringa semipalmata</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/mourning_dove.jpg'><img src={mourningDove} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Mourning dove</h4>
            <h6>A species of Dove</h6>
            <h6><i>Zenaida macroura</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/blue_jay.jpg'><img src={blueJay} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Blue jay</h4>
            <h6>A species of Crows and jays</h6>
            <h6><i>Cyanocitta cristata</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/barred_owl.jpg'><img src={barredOwl} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Barred owl</h4>
            <h6>A species of True owls</h6>
            <h6><i>Strix varia</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/common_grackle.jpg'><img src={commonGrackle} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Common grackle</h4>
            <h6>A species of New world blackbirds and orioles</h6>
            <h6><i>Quiscalus quiscula</i></h6>

          </div>

          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/northern_mockingbird.jpg'><img src={northernMockingbird} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Northern Mockingbird</h4>
            <h6>A species of Mimids</h6>
            <h6><i>Mimus polyglottos</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/black-capped_chickadee.jpg'><img src={blackcappedChickadee} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Black-capped Chickadee</h4>
            <h6>A species of Tits</h6>
            <h6><i>Poecile atricapllus</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/eastern_kingbird.jpg'><img src={easternKingbird} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Eastern Kingbird</h4>
            <h6>A species of Tyrant flycatchers</h6>
            <h6><i>Tyrannus tyrannus</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/red-winged_blackbird.jpg'><img src={redWingedBlackbird} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Red-winged blackbird</h4>
            <h6>A species of New world blackbirds and orioles</h6>
            <h6><i>Agelaius phoeniceus</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/dickcissel.jpg'><img src={disckcissel} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Dickcissell</h4>
            <h6>A species of Cardinals</h6>
            <h6><i>Cardinalidae</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/tufted_titmouse.jpg'><img src={tuftedTitmouse} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Tufted titmouse</h4>
            <h6>A species of Tits</h6>
            <h6><i>Baeolophus bicolor</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/summer_tanager.jpg'><img src={summerTanager} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Summer tanager</h4>
            <h6>A species of Cardinals</h6>
            <h6><i>Piranga rubra</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/great_blue_heron.jpg'><img src={greatBlueHeron} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Great blue heron</h4>
            <h6>A species of Herons</h6>
            <h6><i>Ardea herodias</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/canada_goose.jpg'><img src={canadaGoose} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Canada goose</h4>
            <h6>A species of Geese</h6>
            <h6><i>Branta canadensis</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/house_sparrow.jpg'><img src={houseSparrow} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>House sparrow</h4>
            <h6>A species of Old world sparrows</h6>
            <h6><i>Passer domesticus</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/house_finch.jpg'><img src={houseFinch} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>House finch</h4>
            <h6>A species of Finches</h6>
            <h6><i>Haemorhous mexicanus</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/western_kingbird.jpg'><img src={westernKingbird} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Western kingbird</h4>
            <h6>A species of Tyrant flycatchers</h6>
            <h6><i>Tyrannus verticalis</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/downy_woodpecker.jpg'><img src={downyWoodpecker} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Downy woodpecker</h4>
            <h6>A species of Woodpeckers</h6>
            <h6><i>Picoides pubescens</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/american_crow.jpg'><img src={americanCrow} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>American crow</h4>
            <h6>A species of Crows and jays</h6>
            <h6><i>Corvus brachyrhynchos</i></h6>
          </div>

          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/laughing_gull.jpg'><img src={laughingGull} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Laughing gull</h4>
            <h6>A species of Gulls</h6>
            <h6><i>Leucophaeus atricilla</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/willet.jpg'><img src={willet} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Willet</h4>
            <h6>A species of Sandpipers</h6>
            <h6><i>Tringa semipalmata</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/mourning_dove.jpg'><img src={mourningDove} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Mourning dove</h4>
            <h6>A species of Dove</h6>
            <h6><i>Zenaida macroura</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/blue_jay.jpg'><img src={blueJay} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Blue jay</h4>
            <h6>A species of Crows and jays</h6>
            <h6><i>Cyanocitta cristata</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/barred_owl.jpg'><img src={barredOwl} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Barred owl</h4>
            <h6>A species of True owls</h6>
            <h6><i>Strix varia</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/common_grackle.jpg'><img src={commonGrackle} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Common grackle</h4>
            <h6>A species of New world blackbirds and orioles</h6>
            <h6><i>Quiscalus quiscula</i></h6>

          </div>

          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/northern_mockingbird.jpg'><img src={northernMockingbird} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Northern Mockingbird</h4>
            <h6>A species of Mimids</h6>
            <h6><i>Mimus polyglottos</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/black-capped_chickadee.jpg'><img src={blackcappedChickadee} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Black-capped Chickadee</h4>
            <h6>A species of Tits</h6>
            <h6><i>Poecile atricapllus</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/eastern_kingbird.jpg'><img src={easternKingbird} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Eastern Kingbird</h4>
            <h6>A species of Tyrant flycatchers</h6>
            <h6><i>Tyrannus tyrannus</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/red-winged_blackbird.jpg'><img src={redWingedBlackbird} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Red-winged blackbird</h4>
            <h6>A species of New world blackbirds and orioles</h6>
            <h6><i>Agelaius phoeniceus</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/dickcissel.jpg'><img src={disckcissel} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Dickcissell</h4>
            <h6>A species of Cardinals</h6>
            <h6><i>Cardinalidae</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/tufted_titmouse.jpg'><img src={tuftedTitmouse} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Tufted titmouse</h4>
            <h6>A species of Tits</h6>
            <h6><i>Baeolophus bicolor</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/summer_tanager.jpg'><img src={summerTanager} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Summer tanager</h4>
            <h6>A species of Cardinals</h6>
            <h6><i>Piranga rubra</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/great_blue_heron.jpg'><img src={greatBlueHeron} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Great blue heron</h4>
            <h6>A species of Herons</h6>
            <h6><i>Ardea herodias</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/canada_goose.jpg'><img src={canadaGoose} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Canada goose</h4>
            <h6>A species of Geese</h6>
            <h6><i>Branta canadensis</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/house_sparrow.jpg'><img src={houseSparrow} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>House sparrow</h4>
            <h6>A species of Old world sparrows</h6>
            <h6><i>Passer domesticus</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/house_finch.jpg'><img src={houseFinch} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>House finch</h4>
            <h6>A species of Finches</h6>
            <h6><i>Haemorhous mexicanus</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/western_kingbird.jpg'><img src={westernKingbird} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Western kingbird</h4>
            <h6>A species of Tyrant flycatchers</h6>
            <h6><i>Tyrannus verticalis</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/downy_woodpecker.jpg'><img src={downyWoodpecker} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Downy woodpecker</h4>
            <h6>A species of Woodpeckers</h6>
            <h6><i>Picoides pubescens</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/american_crow.jpg'><img src={americanCrow} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>American crow</h4>
            <h6>A species of Crows and jays</h6>
            <h6><i>Corvus brachyrhynchos</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/killdeer.jpg'><img src={killdeer} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Killdeer</h4>
            <h6>A species of Plovers</h6>
            <h6><i>Charadrius vociferus</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/ruddy_shelduck.jpg'><img src={ruddyShelduck} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Ruddy Shelduck</h4>
            <h6>A species of Geese</h6>
            <h6><i>Tadorna ferruginea</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/slender-billed_gull.jpg'><img src={slenderbilledGull} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Slender-billed gull</h4>
            <h6>A species of Gulls</h6>
            <h6><i>Chroicocephalus genei</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/mandarin_duck.jpg'><img src={mandarinDuck} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Mandarin duck</h4>
            <h6>A species of Geese</h6>
            <h6><i>Aix galericulata</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/sulphur-crested_cockatoo.jpg'><img src={sulphurcrestedCockatoo} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Sulphur-crested cockatoo</h4>
            <h6>A species of Parrots</h6>
            <h6><i>Cacatua galerita</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/eclectus_parrot.jpg'><img src={eclectusParrot} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Eclectus parrot</h4>
            <h6>A species of Parrots</h6>
            <h6><i>Eclectus roratus</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/black_swan.jpg'><img src={blackSwan} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Black swan</h4>
            <h6>A species of Geese</h6>
            <h6><i>Cygnus atratus</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/straw-necked_ibis.jpg'><img src={strawneckedIbis} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Straw-necked ibis</h4>
            <h6>A species of Ibises and spoonbills</h6>
            <h6><i>Threskiornis spinicollis</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/coopers_hawk.jpg'><img src={coopersHawk} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Prarie Falcon</h4>
            <h6>A member of the Falcon family (Falconidae) (</h6>
            <h6><i>Falco mexicanus</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/great_egret.jpg'><img src={greatEgret} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>Great Egret</h4>
            <h6>A species of Egret </h6>
            <h6><i>Ardea alba</i></h6>

          </div>
          <div className={'col-md-4 centered_birds'}>
            <a href='../assets/american_goldfinch.jpg'><img src={americanGoldfinch} alt={''} className={'seth-tile-img-bird'}/></a>
            <h4>American Goldfinch</h4>
            <h6>A member of the Finch Family </h6>
            <h6><i>Spinus tristis</i></h6>

          </div>
        </div>
      </div>
    );
  }
}

export default Birds;
