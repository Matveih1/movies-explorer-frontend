import React from 'react';
import { useLocation } from "react-router-dom";

import './MoviesCard.css';

function MoviesCard (props) {

  const location = useLocation();

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__like ${props.isLiked && 'card__like_active'}`; 

  console.log(props.movie.image);
  // console.log(props.movie.image.url);
  const image = props.movie.image
    ? "https://api.nomoreparties.co" + props.movie.image.url
    : "#";

  const time = `${Math.trunc(props.movie.duration / 60)}ч ${props.movie.duration % 60}м`;


  function handleLikeClick() {
   // props.onCardLike(props.card);
  }

  return (
    <div className = "card">
      <img
        className = "card__image"
        src = {image}
        alt = {props.movie.nameRU}
      />
      <div className = "card__info">
        <h2 className = "card__title">{ props.movie.nameRU }</h2>
        {location.pathname === '/saved-movies' ? (
          <button
            className = "card__delete"
            type = "button" 
          >
            &#9587;
          </button>
        ) : (
          <button
            className = {cardLikeButtonClassName}
            type = "button"
            onClick = {handleLikeClick}
          ></button>
        )}
      </div>
      <h3 className = "card__time">{ time }</h3>
    </div>
  )
}

export default MoviesCard;