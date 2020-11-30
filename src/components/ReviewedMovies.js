import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap';

class ReviewedMovies extends Component {
  render() {
    const reviewedMovies = this.props.reviewedMoviesInReact
    return (
      <div>
        <h1>Movie Reviews</h1>
        {reviewedMovies && reviewedMovies.length > 0 &&
        <Table striped bordered hover>
          <thead>
                <tr>
                  <th><b>#</b></th>
                  <th><b>Movie Title</b></th>
                  <th><b>Thumbs Up</b></th>
                  <th><b>Thumbs Down</b></th>
                </tr>
              </thead>

              <tbody>
                {reviewedMovies.map((movie,i) => {
                  return (
                    <tr key={movie.id}>
                      <td>{i+1}</td>
                      <td>{movie.title}</td>
                      <td>{movie.thumbsUp}</td>
                      <td>{movie.thumbsDown}</td>
                    </tr>
                  )
                })}
              </tbody>

        </Table>
        }
      </div>
    )
  }

}

const mapState = state => {
  return {
    reviewedMoviesInReact: state.reviewedMovies
  }
}

export default connect(mapState, null)(ReviewedMovies)
