import React from 'react';
import Draggable from 'react-draggable';
import './favPilots.scss';

export default class FavouritePilots extends React.Component {
  state = { position: [0, 400] };

  moveSection = () => {
    document.addEventListener('mousedown', (e) => {
      this.setState({ position: [e.clientX, e.clientY] });
    });
  };

  render() {
    return (
      <Draggable>
        <div className='favSection'>
          <header>
            <h3>Favourite Pilots</h3>
            <button onClick={this.props.resetFavs}>reset list</button>
          </header>
          <ul>
            {this.props.favPilots.map((pilot, i) => (
              <li key={i}>
                <p>{pilot}</p>{' '}
                <button onClick={() => this.props.removeFav(pilot)}>X</button>
              </li>
            ))}
          </ul>
        </div>
      </Draggable>
    );
  }
}
