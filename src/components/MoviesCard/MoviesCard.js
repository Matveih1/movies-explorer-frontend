import React from 'react';
import { useLocation } from "react-router-dom";

import './MoviesCard.css';

function MoviesCard (props) {

  const location = useLocation();

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__like ${props.isLiked && 'card__like_active'}`; 

  function handleLikeClick() {
   // props.onCardLike(props.card);
  }

  return (
    <div className = "card">
      <img
        className = "card__image"
        src = {props.src}
        alt = {props.name}
      />
      <div className = "card__info">
        <h2 className = "card__title">{ props.name }</h2>
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
      <h3 className = "card__time">{ props.time }</h3>
    </div>
  )
}

export default MoviesCard;