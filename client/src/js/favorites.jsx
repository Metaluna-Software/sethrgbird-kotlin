import * as React from 'react';
import '../style.css';
import Eternal from '../images/eternal.jpg'
import Carrey from '../images/carrey.jpg'
import Nolan from '../images/nolan.jpg'
import AD from '../images/ad.jpg'
import H3H3 from '../images/h3h3.jpg'
import Eminem from '../images/eminem.jpg'
import Alyx from '../images/alyx.jpg'
import Nico from '../images/nico.jpg'
import Smw from '../images/smw.gif'
import Monopoly from '../images/monopoly.jpg'
import Snes from '../images/snes.jpg'
import Euchre from '../images/euchre.jpg'

class Favorites extends React.Component {
  render() {
    return (
      <div className={'page-section'}>
        <h6>The following lists are favorites in media in various categories. There is a top choice along with runner
          ups.</h6>
        <div className={'row'}>
          <div className={'col-md-4'}>
            <h3>Movies</h3>
            <h6>Eternal Sunshine of the Spotless Mind</h6>
            <img src={Eternal} alt={'eternal image'} className={'seth-tile-img'}/>
            <p>The Life Aquatic, The Dark Knight, Slumdog Millionaire, The Big Lebowski, Brazil</p>
          </div>
          <div className={'col-md-4'}>
            <h3>Actors</h3>
            <h6>Jim Carrey</h6>
            <img src={Carrey} alt={'carrey image'} className={'seth-tile-img'}/>
            <p>Christian Bale, Jack Black, Robert Downy Jr, Michael Cane, Kristen Bell</p>
          </div>
          <div className={'col-md-4'}>
            <h3>Directors</h3>
            <h6>Christopher Nolan</h6>
            <img src={Nolan} alt={'nolan image'} className={'seth-tile-img'}/>
            <p>Wes Anderson, Michel Gondry, Joel and Ethan Coen, JJ Abrams, Danny Boyle, Terry Gilliam</p>
          </div>
          <div className={'col-md-4'}>
            <h3>TV Shows</h3>
            <h6>Arrested Development</h6>
            <img src={AD} alt={'AD image'} className={'seth-tile-img'}/>
            <p>LOST, The IT Crowd, Seinfeld, Dexter, Veronica Mars, Firefly, Futurama, It&apos;s Always Sunny in
              Philadelphia, Black Mirror, Fargo, Sopranos, Bob&apos;s Burgers, Archer, Robot Chicken, Weeds, The
              Simpsons</p>
          </div>
          <div className={'col-md-4'}>
            <h3>Youtubers</h3>
            <h6>H3H3</h6>
            <img src={H3H3} alt={'H3H3 image'} className={'seth-tile-img'}/>
            <p>Comment Etiquette with Erik, CGP Gray, videogamedunkey, Trolden, Captain Disillusion, Regular Cars, Every
              Frame a Painting, Killian Experience, SMBC Theater</p>
          </div>
          <div className={'col-md-4'}>
            <h3>Bands / Artists</h3>
            <h6>Eminem</h6>
            <img src={Eminem} alt={'Eminem image'} className={'seth-tile-img'}/>
            <p>Britany Spears, Cake, Metric, REM, White Stripes, Weird Al, Franz Ferdinand, Freezepop, Garbage,
              Gorillaz,
              Green Day, Bad Religion, Blondie, Bloodhound Gang, Daft Punk, David Bowie, Jethro Tull, Pearl Jam,
              Persephone&apos;s Bees, Pink Floyd, Rage Against the Machine, System of a Down, Tenacious D</p>
          </div>
          <div className={'col-md-4'}>
            <h3>PC Games</h3>
            <h6>Half-life Alyx</h6>
            <img src={Alyx} alt={'Alyx image'} className={'seth-tile-img'}/>
            <p>Half-life series, Counter-Strike Source, Cyberpunk, Sims, Sim City, Skyrim, Minecraft, Red Faction
              Guerilla,
              Age of Empires II, Railroad Tycoon III, Farcry (original only), Plants vs. Zombies, Crysis, Gnomoria,
              Factorio, Banished, Craft the World, Fallout 4, Stellaris, Civilization</p>
          </div>
          <div className={'col-md-4'}>
            <h3>Console Games</h3>
            <h6>Grand Theft Auto 4</h6>
            <img src={Nico} alt={'nico image'} className={'seth-tile-img'}/>
            <p>Grand Theft Auto series, Gran Turismo series, The Simpson&apos;s Game (PS3)</p>
          </div>
          <div className={'col-md-4'}>
            <h3>Classic Console</h3>
            <h6>Super Mario World</h6>
            <img src={Smw} alt={'super mario image'} className={'seth-tile-img'}/>
            <p>Super Mario 3, Ocarina of Time, Turtles in Time, Duck Hunt</p>
          </div>
          <div className={'col-md-4'}>
            <h3>Board Games</h3>
            <h6>Monopoly</h6>
            <img src={Monopoly} alt={'monopoly image'} className={'seth-tile-img'}/>
            <p>Clue, Risk, Ticket to Ride, Settlers of Catan</p>
          </div>
          <div className={'col-md-4'}>
            <h3>Card Games</h3>
            <h6>Euchre</h6>
            <img src={Euchre} alt={'euchre image'} className={'seth-tile-img'}/>
            <p>Cards Against Humanity, Freecell, Spider Solitaire</p>
          </div>
          <div className={'col-md-4'}>
            <h3>Console Collection</h3>
            <h6>SNES</h6>
            <img src={Snes} alt={'super nintendo image'} className={'seth-tile-img'}/>
            <p>I am also an amateur video game console collector. I currently have: NES, Intellivision, Sega Master
              System,
              Atari 7800, SuperNES, Sega Genesis, Nintendo64, Playstation, Gamecube, PS2, Dreamcast, Xbox, PS3, Wii,
              Steamlink</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
