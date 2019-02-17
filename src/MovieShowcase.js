import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  generateMovieCards = () => movieData.map(data => <MovieCard {...data} />);
  render = () => <div id="movie-showcase">{this.generateMovieCards()}</div>
}
