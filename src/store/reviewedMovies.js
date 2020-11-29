
// action types
export const REVIEWED_MOVIE = 'REVIEWED_MOVIE'
export const ALREADY_REVIEWED_MOVIE = 'ALREADY_REVIEWED_MOVIE'

// action creators
export const reviewedMovie = movie => {
  console.log('i am MOVIE in action creator', movie)
  return {
    type: REVIEWED_MOVIE,
    movie: movie
  }
}

export const alreadyReviewedMovie = movie => {
  return {
    type: ALREADY_REVIEWED_MOVIE,
    movie: movie
  }
}

// // thunk creators
// export const fetchReviewedMovie = (movie) =>  async dispatch => {
//   console.log('i am in thunk review')
//   await dispatch(reviewedMovie(movie))
// }

// initial state
const reviewedMovies = []

// reducer
export default function reviewedMovieReducer(state = reviewedMovies, action) {
  switch(action.type) {
    case REVIEWED_MOVIE:
      return [...state, action.movie]
    case ALREADY_REVIEWED_MOVIE:
      console.log('STATE',state)
      let alreadyR = state.filter(movie => movie.id === action.movie.id)
      alreadyR[0].thumbsUp +=1
      console.log('ALREADYREVIEWED', alreadyR)
      return [...state]
    default:
      return state
  }
}



