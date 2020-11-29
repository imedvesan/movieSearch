import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllMovies from './components/AllMovies'
import SingleMovie from './components/SingleMovie';
import Header from './components/Header'
import Footer from './components/Footer';
import ReviewedMovies from './components/ReviewedMovies';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
        <Route path='/movie/:id' component={SingleMovie} />
        <Route exact path='/reviewed' component={ReviewedMovies} />
          <Route exact path='/' component={AllMovies} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
