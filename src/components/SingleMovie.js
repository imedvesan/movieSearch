import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../store/singleMovie'
import { Card, Button } from 'react-bootstrap';
import { reviewedMovie, alreadyReviewedMovie } from '../store/reviewedMovies';


class SingleMovie extends Component {
  constructor() {
    super();
    // this.state = {
    //   reviewedMovie: {
    //     thumbsUp: 0,
    //     thumbsDown: 0
    //   }
    // }
    this.thumbsUp = this.thumbsUp.bind(this)
    this.thumbsDown = this.thumbsDown.bind(this)
  }

  thumbsUp() {
    if(this.props.reviewedMoviesInReact.length > 0) {
      const alreadyReviewed = this.props.reviewedMoviesInReact.filter(movie => movie.id === this.props.movieInReact.id)
      console.log('ALREADYREVIEWED', alreadyReviewed)
      if(alreadyReviewed.length === 1) {
        this.props.movieInReact.thumbsUp += 1
        this.props.alreadyReviewedMovieInReact(alreadyReviewed[0])
        // this.props.reviewedMovieInReact(this.props.movieInReact)
      }
      else {
        this.props.movieInReact.thumbsUp = 1
        this.props.reviewedMovieInReact(this.props.movieInReact)
      }
    } else {
      this.props.movieInReact.thumbsUp = 1
      this.props.reviewedMovieInReact(this.props.movieInReact)
    }
  }

  thumbsDown() {
    // if(this.props.reviewedMoviesInReact.length > 0) {
    //   const alreadyReviewed = this.props.reviewedMoviesInReact.filter(movie => movie.id === this.props.movieInReact.id)
    //   console.log('ALREADYREVIEWED', alreadyReviewed)
    //   if(alreadyReviewed.length === 1) {
    //     this.props.movieInReact.thumbsUp += 1
    //     this.props.alreadyReviewedMovieInReact(alreadyReviewed[0])
    //     // this.props.reviewedMovieInReact(this.props.movieInReact)
    //   }
    //   else {
    //     this.props.movieInReact.thumbsUp = 1
    //     this.props.reviewedMovieInReact(this.props.movieInReact)
    //   }
    // } else {
    //   this.props.movieInReact.thumbsUp = 1
    //   this.props.reviewedMovieInReact(this.props.movieInReact)
    // }
  }

  async componentDidMount() {
    // if (this.props.movie !== this.props.match.params.id) {
    this.props.getMovieFromStore(this.props.match.params.id)
    // }
}

  render() {
    let movie = this.props.movieInReact
    return (
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={movie.poster} alt='movie poster'/>
        <Card.Body>
          <Card.Title>Title: {movie.title}</Card.Title>
          <Card.Text>Release year: {movie.year}</Card.Text>
          <Card.Text>
          Description: {movie.plot}
          </Card.Text>
          <Button onClick={this.thumbsUp}><i className="far fa-thumbs-up"></i></Button>
          <Button onClick={this.thumbsDown}/*variant="primary"*/><i className="far fa-thumbs-down"></i></Button>
        </Card.Body>
      </Card>
    )
  }
}

const mapState = state => {
  return {
    movieInReact: state.singleMovie,
    reviewedMoviesInReact: state.reviewedMovies
  }
}

const mapDispatch = dispatch => {
  return {
    getMovieFromStore(id) {
      dispatch(fetchMovie(id))
    },
    reviewedMovieInReact(movie) {
      dispatch(reviewedMovie(movie))
    },
    alreadyReviewedMovieInReact(movie) {
      dispatch(alreadyReviewedMovie(movie))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleMovie)
