import React from 'react';
import { useLocation } from "react-router-dom";

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import image from '../../images/movies1.jpg';
import { MoviesContext } from "../../contexts/contexts";

function MoviesCardList (props) {

  const location = useLocation();
  const movies = React.useContext(MoviesContext);

  return (
    <>
    <section className = "card-list">
      {
        movies.map(movie => (
          <MoviesCard
            // key={card._id}
            card={movie}
            src = {image}
            // name = {movie.nameRU}
            name = {movie.image.url}
            time = "13:40"
            isLiked = {false}
            // onCardClick={onCardClick}
            // onCardLike={onCardLike}
            // onCardDelete={onCardDelete}
          />
          )
        )               
      }


      {/* <MoviesCard
        src = {image}
        name = "33 слова о дизайне"
        time = "13:40"
        isLiked = {false}
      />
      <MoviesCard
        src={image}
        name="Киноальманах «100 лет дизайна»"
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
      /> */}
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