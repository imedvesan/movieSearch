import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../store/singleMovie'
import { Card } from 'react-bootstrap';


class SingleMovie extends Component {

  async componentDidMount() {
    // if (this.props.movie !== this.props.match.params.id) {
    this.props.getMovieFromStore(this.props.match.params.id)
    // }
}

  render() {
    let movie = this.props.movieInReact
    console.log("singleMovie:", movie)
    return (
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={movie.poster} alt='movie poster'/>
        <Card.Body>
          <Card.Title>Title: {movie.title}</Card.Title>
          <Card.Text>Release year: {movie.year}</Card.Text>
          <Card.Text>
          Description: {movie.plot}
          </Card.Text>
          {/* <Button variant="primary">Go back</Button> */}
          {/* <Link to='/' className='btn btn-light my-3'>Go Back</Link> */}
        </Card.Body>
      </Card>
    )
  }
}

const mapState = state => {
  return {
    movieInReact: state.singleMovie
  }
}

const mapDispatch = dispatch => {
  return {
    getMovieFromStore(id) {
      dispatch(fetchMovie(id))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleMovie)
