import React from 'react';
import StarshipElement from './starshipElement';
import './starships.scss';

export default class StarshipSection extends React.Component {
  state = {
    starShips: [],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.starships !== this.props.starships) {
      this.setState({
        starShips: [],
      });
      this.props.starships.map((starship) =>
        fetch(starship)
          .then((result) => result.json())
          .then((data) =>
            this.setState({
              starShips: [...this.state.starShips, data],
            })
          )
      );
    }
  }

  render() {
    return (
      <section id='starshipSection'>
        <h1>Starships</h1>

        {this.state.starShips ? (
          this.state.starShips.map((starship, i) => (
            <StarshipElement
              key={starship.url + i}
              starship={starship}
              addFav={this.props.addFav}
              passPilots={this.props.passPilots}
              selectedStarship={this.props.selectedStarship}
              selectedStarshipHandler={this.props.selectedStarshipHandler}
            />
          ))
        ) : (
          <h2>no starShips yet</h2>
        )}
      </section>
    );
  }
}
