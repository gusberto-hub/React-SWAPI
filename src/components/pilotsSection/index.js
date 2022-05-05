import React from 'react';
import PilotElement from './pilotElement';
import './pilots.scss';

export default class PilotsSection extends React.Component {
  render() {
    return (
      <>
        <section id='pilotsSection'>
          <h1>Pilots</h1>

          {this.props.pilots.map((pilot, i) => (
            <PilotElement key={i} pilot={pilot} addFav={this.props.addFav} />
          ))}
        </section>
      </>
    );
  }
}
