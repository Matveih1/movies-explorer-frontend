import React from 'react';
import { useLocation } from "react-router-dom";

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import image from '../../images/movies1.jpg';

function MoviesCardList (props) {

  const location = useLocation();

  return (
    <>
    <section className = "card-list">
  
      <MoviesCard
        src = {image}
        name = "33 слова о дизайне"
        time = "13:40"
        isLiked = {false}
      />
      <MoviesCard
        src={image}
        name="33 слова о дизайне"
        time="13:40"
        isLiked = {true}
      />
      <MoviesCard
        src={image}
        name="33 слова о дизайне"
        time="13:40"
        isLiked={false}
      />
      <MoviesCard
        src={image}
        name="33 слова о дизайне"
        time="13:40"
        isLiked={true}
      />
      <MoviesCard
        src={image}
        name="33 слова о дизайне"
        time="13:40"
        isLiked={true}
      />
      <MoviesCard
        src={image}
        name="33 слова о дизайне"
        time="13:40"
        isLiked={true}
      />
      <MoviesCard
        src={image}
        name="33 слова о дизайне"
        time="13:40"
        isLiked={true}
      />
    </section>
    {location.pathname === '/movies' &&
      <section className="another">
        <button
          className="button-movies"
        >
          Ещё
        </button>
      </section>
    }
  </>
  )
}

export default MoviesCardList;