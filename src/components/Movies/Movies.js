import React from 'react';

import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies(props) {
  return(
    <page className="movies">
      <Header/>
      <SearchForm
        onSearch = {props.onMovies}
      />
      <MoviesCardList
        onLikeCard = {props.handleLikeCard}
        onDeleteCard = {props.handleDeleteMovie}
      />
      <Footer/>
    </page>
  )
}

export default Movies;
