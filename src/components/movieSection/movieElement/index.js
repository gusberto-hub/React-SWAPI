import React from 'react';
import axios from 'axios';

export default class MovieElement extends React.Component {
  state = { showDetails: false };

  toggleDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  showStarshipsHandler = () => {
    this.props.selectedMovieHandler(this.props.movie.episode_id);
    if (this.props.selectedMovie === this.props.movie.episode_id) {
      this.props.passStarships([]);
      this.props.passPilots([]);
      this.props.selectedMovieHandler(undefined);
    } else {
      this.props.selectedMovieHandler(this.props.movie.episode_id);
      axios(this.props.movie.url).then((res) =>
        this.props.passStarships(res.data.starships)
      );
    }
  };

  render() {
    return (
      <div
        className={`movie ${
          this.props.selectedMovie === this.props.movie.episode_id &&
          'movie-active'
        }`}
      >
        <h2 url={this.props.movie.url}>{this.props.movie.title}</h2>
        <button onClick={this.toggleDetails}>
          {this.state.showDetails ? 'less' : 'more'}
        </button>
        <button onClick={this.showStarshipsHandler}>show Starships</button>
        <p
          className={`episode ${
            this.state.showDetails ? 'episode-lg' : 'episode-sm'
          }`}
        >
          {this.props.movie.episode_id}
        </p>
        {this.state.showDetails && (
          <>
            <div>
              <p>
                <span>Release date</span> {this.props.movie.release_date}
              </p>
              <p>
                <span>opening crawl</span> {this.props.movie.opening_crawl}
              </p>
            </div>
          </>
        )}
      </div>
    );
  }
}
