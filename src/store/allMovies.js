import axios from 'axios'

// action types
export const GET_MOVIES = 'GET_MOVIES'

// action creators
export const getMovies = movies => {
  return {
    type: GET_MOVIES,
    movies: movies
  }
}

// thunk creators
export const fetchMovies = (movieTitle) => async dispatch => {
  console.log('APIKEY:', process.env.MOVIE_API_KEY)
  try {
    const options = {
      method: 'GET',
      url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${movieTitle}`,
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_MOVIE_API_KEY,
        'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
      }
    };
    const movies = await axios.request(options)
    dispatch(getMovies(movies.data.titles))

  } catch(err) {
    console.log(err)
  }
}

// initial state
const movies = []

// reducer
export default function moviesReducer(state = movies, action) {
  switch(action.type) {
    case GET_MOVIES:
      return [...action.movies]
    default:
      return state
  }
}



