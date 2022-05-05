import axios from 'axios';
import React from 'react';

export default class StarshipElement extends React.Component {
  state = { pilots: [], selectedStarship: undefined };
  starship = this.props.starship;

  componentDidMount() {
    this.starship.pilots.map((pilotURL) =>
      axios(pilotURL).then((res) =>
        this.setState({ pilots: [...this.state.pilots, res.data] })
      )
    );
  }

  showPilots = () => {
    if (this.props.selectedStarship === this.starship.name) {
      this.props.passPilots([]);
      this.props.selectedStarshipHandler(undefined);
    } else {
      this.props.passPilots(this.state.pilots);
      this.props.selectedStarshipHandler(this.starship.name);
    }
  };

  render() {
    return (
      <div
        className={`starship ${
          this.props.selectedStarship === this.starship.name &&
          'starship-active'
        }`}
      >
        <div>
          <h3>{this.starship.name}</h3>
          <ul>
            <li>
              <span>manufacturer</span> {this.starship.manufacturer}
            </li>
            <li>
              <span>model</span> {this.starship.model}
            </li>
            <li>
              <span>passengers</span> {this.starship.passengers}
            </li>
            <li>
              <span>max.speed</span> {this.starship.max_atmosphering_speed}
            </li>
            <li>
              <span>length</span> {this.starship.length}
            </li>

            <li>
              {this.state.pilots.length > 0 ? (
                <>
                  <button onClick={() => this.showPilots(this.state.pilots)}>
                    show pilots
                  </button>
                </>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
