import React from 'react';
import axios from 'axios';
import MovieElement from './movieElement';
import './movies.scss';

export default class MovieSection extends React.Component {
  state = {
    movies: [],
    selectedMovie: undefined,
  };

  componentDidMount() {
    axios('https://swapi.sit.academy/api/films/').then((res) =>
      this.setState({
        movies: res.data['results'],
      })
    );
  }

  selectedMovieHandler = (movie) => {
    this.setState({ selectedMovie: movie });
  };

  render() {
    return (
      <section id='movieSection'>
        <h1>Films</h1>
        <div>
          <ul>
            {this.state.movies.map((movie, i) => (
              <li key={i}>
                <MovieElement
                  movie={movie}
                  showDetails={this.state.showDetails}
                  passStarships={this.props.passStarships}
                  passPilots={this.props.passPilots}
                  selectedMovie={this.state.selectedMovie}
                  selectedMovieHandler={this.selectedMovieHandler}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}
