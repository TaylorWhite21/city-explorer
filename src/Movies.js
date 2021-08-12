import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Movies.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {

    return (
      <>
       <Carousel id='slides' >
        {this.props.showMovies.map((movie, idx) =>
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src= {movie.image_url ?
                      `https://image.tmdb.org/t/p/w500${movie.image_url}`
                      : 'https://via.placeholder.com/150' }
                alt='Movie Poster'
              />
              <Carousel.Caption id="movieInfo">
              Title: {movie.title}<br></br>
              Overview: {movie.overview}<br></br>
              Average Votes: {movie.average_votes}<br></br>
              Vote Count: {movie.total_votes}<br></br>
              Popularity: {movie.popularity}<br></br>
              Release Date: {movie.released_on}<br></br>
              </Carousel.Caption>
            </Carousel.Item>
        )

        }
           </Carousel>

      </>

    )

  }
}

export default Movies;
