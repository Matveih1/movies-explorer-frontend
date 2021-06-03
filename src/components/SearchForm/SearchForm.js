import React from 'react';

import './SearchForm.css';
import search_ico from '../../images/search.svg';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm(props) {

  function onSearch(e) {
    e.preventDefault();
    props.onSearch();
  }

  return(
    <section className="search">
      <form className="search-form">
        <div className="search-block">
          <input
            className = "search-input"
            type      = "text"
            name      = "search-input"
            // required 
            placeholder = "Фильм"
          />
          <button 
            className = "search-button"
            type = "submit"
            onClick = {onSearch}
          >
            <img className="search-ico" src={search_ico} alt="Найти"/>
          </button>
        </div>
        <div className="search__switch">
          <FilterCheckbox/>
          <span className="search__text">Короткометражки</span>
        </div>   
      </form>
    </section>
  )
}

export default SearchForm;
