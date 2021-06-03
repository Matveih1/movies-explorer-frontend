import React from 'react';

import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies(props) {
  return(
    <>
      <Header/>
      <SearchForm
        onSearch = {props.handleMovies}
      />
      <MoviesCardList/>
      <Footer/>
    </>
  )
}

export default Movies;
