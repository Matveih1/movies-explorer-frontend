import React from 'react';

import './SearchForm.css';
import search_ico from '../../images/search.svg';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  return(
    <section className="search">
      <form className="search-form">
        <div className="search-block">
          <input
            className = "search-input"
            type      = "text"
            name      = "search-input"
            required 
            placeholder = "Фильм"
          />
          <button 
            className="search-button"
            type="submit"
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
