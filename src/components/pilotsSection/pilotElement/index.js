import React from 'react';

export default class PilotElement extends React.Component {
  state = { pilot: this.props.pilot, showDetails: false };
  // state = { species: '' };

  toggleDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    const pilot = this.props.pilot;
    return (
      <>
        <div className='pilot'>
          <h3>{pilot.name}</h3>
          <ul>
            <li>
              <span>height</span> {pilot.height}
            </li>
            <li>
              <span>mass</span> {pilot.mass}
            </li>
            <li>
              <span>birth year</span> {pilot.birth_year}
            </li>
            <li>
              <span>gender</span> {pilot.gender}
            </li>
            <li>
              <span>species</span>
              {this.state.species && this.state.species.name}
            </li>
          </ul>
          <button onClick={() => this.props.addFav(pilot.name)}>
            add to fav
          </button>
        </div>
      </>
    );
  }
}
