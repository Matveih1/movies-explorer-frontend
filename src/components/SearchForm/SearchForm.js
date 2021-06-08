import React from "react";
import { useLocation } from "react-router-dom";

import "./SearchForm.css";
import search_ico from "../../images/search.svg";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
  const location = useLocation();

  const [searchFilm, setSearchFilm] = React.useState("");
  const [shortFilm, setShortFilm] = React.useState(false);

  function handleSearchFilmChange(e) {
    setSearchFilm(e.target.value);
  }

  function handleShortFilmChange(e) {
    setShortFilm(!shortFilm);
    console.log(shortFilm);
  }

  function onSearch(e) {
    e.preventDefault();
    props.onSearch(searchFilm, shortFilm);
  }

  React.useEffect(() => {
    switch (location.pathname) {
      case "/movies":
        if (JSON.parse(localStorage.getItem("moviesFilteredFilms"))) {
          setSearchFilm(localStorage.getItem("moviesSearchFilm"));
          setShortFilm(JSON.parse(localStorage.getItem("moviesShortFilm")));
        } else {
          setSearchFilm("");
          setShortFilm(false);
        }

        break;
      case "/saved-movies":
        if (JSON.parse(localStorage.getItem("savedMoviesFilteredFilms"))) {
          setSearchFilm(localStorage.getItem("savedMoviesSearchFilm"));
          setShortFilm(JSON.parse(localStorage.getItem("savedMoviesShortFilm")));
        } else {
          setSearchFilm("");
          setShortFilm(false);
        }

        break;
      default:
        console.log("Что-то пошло не так");
    }
  }, []);

  return (
    <section className="search">
      <form className="search-form" onSubmit={onSearch}>
        <div className="search-block">
          {console.log("!!!!!!", searchFilm, shortFilm)}
          <input
            className="search-input"
            type="text"
            name="search-input"
            required
            placeholder="Фильм"
            onChange={handleSearchFilmChange}
            value={searchFilm}
          />
          <button className="search-button" type="submit">
            <img className="search-ico" src={search_ico} alt="Найти" />
          </button>
        </div>
        <div className="search__switch">
          <FilterCheckbox onChange={handleShortFilmChange} checked={shortFilm} />
          <span className="search__text">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
