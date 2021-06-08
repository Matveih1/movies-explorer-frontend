import React from "react";

import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies(props) {
  React.useEffect(() => {
    props.onMovies("", false);
  }, []);

  return (
    <section className="movies">
      <Header />
      <SearchForm onSearch={props.onMovies} />
      <MoviesCardList onLikeCard={props.handleLikeCard} onDeleteCard={props.handleDeleteMovie} />
      <Footer />
    </section>
  );
}

export default Movies;
