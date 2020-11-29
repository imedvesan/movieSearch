import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMovies } from '../store/allMovies'
import { Button, Form, Image, Table } from 'react-bootstrap';

class AllMovies extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    }
    this.getMovies = this.getMovies.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({title: event.target.value})
  }

  getMovies(event) {
    event.preventDefault()
    const movieTitle = this.state.title
    this.props.getMoviesFromStore(movieTitle)
  }
  render() {
    let movies = this.props.moviesInReact
    return (
      <div>
        <div className='text-center'>
          <h1>
            Search {' '}
              <Image src={'https://images-na.ssl-images-amazon.com/images/I/51Q2Au2BLrL.png'} alt={'movie logo'} style={{width: "50px", height: "50px"}}/>
          </h1>
        </div>

        <div className='text-center'>
          <Form onSubmit={this.getMovies}>
            {/* <label htmlFor='title'>Search Movie By Title:</label> */}
            <Form.Control size="lg" type='text' name='title' placeholder='Movie Title' onChange={this.handleChange} value={this.state.title}></Form.Control>
            <Button type="submit" >Submit</Button>
          </Form>
        </div>

        { movies && movies.length > 0 &&
        <Table striped bordered hover>
              <thead>
                <tr>
                  <th><b>#</b></th>
                  <th><b>Movie Title</b></th>
                  <th><b>Image</b></th>
                </tr>
              </thead>

              <tbody>
              {movies.map((movie,i) => {
                return (
                <tr key={movie.id}>
                  <td>{i+1}</td>
                  <td>
                  <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                  </td>
                  <td>
                    <Image src={movie.image} alt={'movie logo'} style={{width: "50px", height: "50px"}} />
                  </td>
                </tr>
                 )
                })}
              </tbody>


            </Table>}
      </div>
    )
  }
}

const mapState = state => {
  return {
    moviesInReact: state.allMovies
  }
}

const mapDispatch = dispatch => {
  return {
    getMoviesFromStore(movieTitle) {
      dispatch(fetchMovies(movieTitle))
    }
  }
}

export default connect(mapState, mapDispatch)(AllMovies)
