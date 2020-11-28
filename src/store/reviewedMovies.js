
// action types
export const REVIEWED_MOVIE = 'REVIEWED_MOVIE'

// action creators
export const reviewedMovie = movie => {
  return {
    type: REVIEWED_MOVIE,
    movie: movie
  }
}

// initial state
const movie = []

// reducer
export default function reviewedMovieReducer(state = movie, action) {
  switch(action.type) {
    case REVIEWED_MOVIE:
      return [...state, action.movie]
    default:
      return state
  }
}



