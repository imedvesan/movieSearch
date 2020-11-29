import axios from 'axios'

// action types
export const GET_MOVIE = 'GET_MOVIE'

// action creators
export const getMovie = movie => {
  return {
    type: GET_MOVIE,
    movie: movie
  }
}

// thunk creators
export const fetchMovie = (id) => async dispatch => {
  try {
    const options = {
      method: 'GET',
      url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${id}`,
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_MOVIE_API_KEY,
        'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
      }
    };
    const movie = await axios.request(options)
    // console.log('MOVIE in thunk', movie.data)
    dispatch(getMovie(movie.data))

  } catch(err) {
    console.log(err)
  }
}

// initial state
const movie = {}

// reducer
export default function movieReducer(state = movie, action) {
  switch(action.type) {
    case GET_MOVIE:
      return action.movie
    default:
      return state
  }
}



