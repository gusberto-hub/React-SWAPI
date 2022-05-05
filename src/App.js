import React from 'react';
import './App.scss';
import Logo from './assets/Star_Wars_Logo.svg.png';
import MovieSection from './components/movieSection';
import StarshipSection from './components/starshipSection';
import PilotsSection from './components/pilotsSection';
import FavouritePilots from './components/favouritePilotsSection';

class App extends React.Component {
  state = {
    starships: [],
    pilots: [],
    favouritePilots: [],
    selectedStarship: '',
  };

  passStarships = (starships) => {
    this.setState({ starships: starships });
  };

  selectedStarshipHandler = (starship) => {
    this.setState({ selectedStarship: starship });
  };

  passPilots = (pilots) => {
    this.setState({ pilots: pilots });
  };

  addFavPilot = (favPilot) => {
    if (!this.state.favouritePilots.includes(favPilot)) {
      this.setState({
        favouritePilots: [...this.state.favouritePilots, favPilot],
      });
    }
  };

  removeFav = (favPilot) => {
    const newList = [...this.state.favouritePilots];
    this.setState({
      favouritePilots: newList.filter((pilot) => pilot !== favPilot),
    });
  };

  resetFavs = () => {
    this.setState({
      favouritePilots: [],
    });
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={Logo} alt='star wars logo' />
        </header>
        <main>
          <MovieSection
            passStarships={this.passStarships}
            passPilots={this.passPilots}
          />
          <StarshipSection
            starships={this.state.starships}
            passPilots={this.passPilots}
            selectedStarship={this.state.selectedStarship}
            selectedStarshipHandler={this.selectedStarshipHandler}
          />
          <PilotsSection pilots={this.state.pilots} addFav={this.addFavPilot} />

          <FavouritePilots
            favPilots={this.state.favouritePilots}
            removeFav={this.removeFav}
            resetFavs={this.resetFavs}
          />
        </main>
      </div>
    );
  }
}

export default App;
