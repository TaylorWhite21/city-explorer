import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import './Weather.css'
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
        {this.props.showMovies.map((movie, idx) =>

            <listGroup key={idx}>
                <ListGroup.Item>{movie.title}</ListGroup.Item>
                <ListGroup.Item>{movie.overview}</ListGroup.Item>
                <ListGroup.Item>{movie.average_votes}</ListGroup.Item>
                <ListGroup.Item>{movie.vote_count}</ListGroup.Item>
                <ListGroup.Item>{movie.poster_path}</ListGroup.Item>
                <ListGroup.Item>{movie.popularity}</ListGroup.Item>
                <ListGroup.Item>{movie.release_date}</ListGroup.Item>
            </listGroup>
        )

        }
        
      </>
              
    )
    
  }
}

export default Movies;
