
// action types
export const REVIEWED_MOVIE = 'REVIEWED_MOVIE'
export const ALREADY_REVIEWED_MOVIE_THUMBS_UP = 'ALREADY_REVIEWED_MOVIE_THUMBS_UP'
export const ALREADY_REVIEWED_MOVIE_THUMBS_DOWN = 'ALREADY_REVIEWED_MOVIE_THUMBS_DOWN'

// action creators
export const reviewedMovie = movie => {
  return {
    type: REVIEWED_MOVIE,
    movie: movie
  }
}

export const alreadyReviewedMovieThumsUp = movie => {
  return {
    type: ALREADY_REVIEWED_MOVIE_THUMBS_UP,
    movie: movie
  }
}

export const alreadyReviewedMovieThumbsDown = movie => {
  return {
    type: ALREADY_REVIEWED_MOVIE_THUMBS_DOWN,
    movie: movie
  }
}

// initial state
const reviewedMovies = []

// reducer
export default function reviewedMovieReducer(state = reviewedMovies, action) {
  switch(action.type) {
    case REVIEWED_MOVIE:
      return [...state, action.movie]
    case ALREADY_REVIEWED_MOVIE_THUMBS_UP:
      let alreadyR = state.filter(movie => movie.id === action.movie.id)
      if(alreadyR[0].thumbsUp) {
        alreadyR[0].thumbsUp +=1
      } else {
        alreadyR[0].thumbsUp = 1
      }
      return [...state]
    case ALREADY_REVIEWED_MOVIE_THUMBS_DOWN:
      let alreadyRe = state.filter(movie => movie.id === action.movie.id)
      if(alreadyRe[0].thumbsDown) {
        alreadyRe[0].thumbsDown +=1
      } else {
        alreadyRe[0].thumbsDown = 1
      }
      return [...state]
    default:
      return state
  }
}



