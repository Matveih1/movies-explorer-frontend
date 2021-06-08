import React from "react";

import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  // React.useEffect(() => {
  //   props.onMovies("", false);
  // }, []);

  return (
    <>
      <Header />
      <SearchForm onSearch={props.onMovies} />
      <MoviesCardList onDeleteCard={props.handleDeleteMovie} />
      <Footer />
    </>
  );
}

export default SavedMovies;
