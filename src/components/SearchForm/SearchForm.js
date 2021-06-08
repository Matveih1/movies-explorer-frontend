import React from 'react';

import './SearchForm.css';
import search_ico from '../../images/search.svg';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm(props) {

  const [searchFilm, setSearchFilm] = React.useState('');
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

  return(
    <section className="search">
      <form 
        className = "search-form"
        onSubmit = {onSearch}
      >
        <div className="search-block">
          <input
            className = "search-input"
            type      = "text"
            name      = "search-input"
            required 
            placeholder = "Фильм"
            onChange = {handleSearchFilmChange}
          />
          <button 
            className = "search-button"
            type = "submit"
          >
            <img className="search-ico" src={search_ico} alt="Найти"/>
          </button>
        </div>
        <div className="search__switch">
          <FilterCheckbox
            onChange = {handleShortFilmChange}
          />
          <span className = "search__text">Короткометражки</span>
        </div>   
      </form>
    </section>
  )
}

export default SearchForm;
