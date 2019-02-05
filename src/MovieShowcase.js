import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
      return movieData.map((a) => {
        return(
          < MovieCard
            title = {a.title}
            IMDBRating = {a.IMDBRating}
            genres = {a.genres}
            poster = {a.poster}
          />
        )
      })
    }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
