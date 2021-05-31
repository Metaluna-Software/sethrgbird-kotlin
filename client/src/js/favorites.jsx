import * as React from 'react';
import '../style.css';

class Favorites extends React.Component {
  render() {
    return (
      <div className={'row'}>
        <div className={'col-md-4'}>
          <h3>Movies</h3>
          <h6>Eternal Sunshine of the Spotless Mind</h6>
          <img src='../images/eternal.jpg' alt={'eternal image'}/>
          <p>The Life Aquatic, The Dark Knight, Slumdog Millionaire, The Big Lebowski, Brazil</p>
        </div>
        <div className={'col-md-4'}>
          <h3>Actors</h3>
          <h6>Jim Carrey</h6>
          <p>Christian Bale, Jack Black, Robert Downy Jr, Michael Cane, Kristen Bell</p>
        </div>
        <div className={'col-md-4'}>
          <h3>Directors</h3>
          <h6>Christopher Nolan</h6>
          <p>Wes Anderson, Michel Gondry, Joel and Ethan Coen, JJ Abrams, Danny Boyle, Terry Gilliam</p>
        </div>
        <div className={'col-md-4'}>
          <h3>TV Shows</h3>
          <h6>Arrested Development</h6>
          <p>LOST, The IT Crowd, Seinfield, Dexter, Veronica Mars, Firefly, Futurama, It&apos;s Always Sunny in
            Philadelphia, Black Mirror, Fargo, Sopranos, Bob&apos;s Burgers, Archer, Robot Chicken, Weeds, The
            Simpsons</p>
        </div>
        <div className={'col-md-4'}>
          <h3>Youtubers</h3>
          <h6>H3H3</h6>
          <p>Comment Etiquette with Erik, CGP Gray, videogamedunkey, Trolden, Captain Disillusion, Regular Cars, Every
            Frame a Painting, Killian Experience, SMBC Theater</p>
        </div>
        <div className={'col-md-4'}>
          <h3>Music / Artist</h3>
          <h6>Eminem</h6>
          <p>Britany Spears, Cake, Metric, REM, White Stripes, Weird Al, Franz Ferdinand, Freezepop, Garbage, Gorillaz,
            Green Day, Bad Religion, Blondie, Bloodhound Gang, Daft Punk, David Bowie, Jethro Tull, Pearl Jam,
            Persephone&apos;s Bees, Pink Floyd, Rage Against the Machine, System of a Down, Tenacious D</p>
        </div>
        <div className={'col-md-4'}>
          <h3>PC Games</h3>
          <h6>Half-life Alyx</h6>
          <p>Half-life series, Counter-Strike Source, Cyberpunk, Sims, Sim City, Skyrim, Minecraft, Red Faction
            Guerilla,
            Age of Empires II, Railroad Tycoon III, Farcry (original only), Plants vs. Zombies, Crysis, Gnomoria,
            Factorio, Banished, Craft the World, Fallout 4, Stellaris, Civilization</p>
        </div>
        <div className={'col-md-4'}>
          <h3>Console Games</h3>
          <h6>Grand Theft Auto 4</h6>
          <p>Grand Theft Auto series, Gran Turismo series, The Simpson&apos;s Game (PS3)</p>
        </div>
        <div className={'col-md-4'}>
          <h3>Classic Console</h3>
          <h6>Super Mario World</h6>
          <p>Super Mario 3, Ocarina of Time, Turtles in Time, Duck Hunt</p>
        </div>
        <div className={'col-md-4'}>
          <h3>Board Games</h3>
          <h6>Monopoly</h6>
          <p>Clue, Risk, Ticket to Ride, Settlers of Catan</p>
        </div>
        <div className={'col-md-4'}>
          <h3>Card Games</h3>
          <h6>Euchre</h6>
          <p>Cards Against Humanity, Freecell, Spider Solitaire</p>
        </div>
        <div className={'col-md-4'}>
          <h3>Console Collection</h3>
          <h6>SNES</h6>
          <p>I am also an amateur video game console collector. I currently have: NES, Intellivision, Sega Master
            System,
            Atari 7800, SuperNES, Sega Genesis, Nintendo64, Playstation, Gamecube, PS2, Dreamcast, Xbox, PS3, Wii,
            Steamlink</p>
        </div>
      </div>
    );
  }
}

export default Favorites;
