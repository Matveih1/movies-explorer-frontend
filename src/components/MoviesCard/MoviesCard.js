import React from 'react';

import './MoviesCard.css';

function MoviesCard (props) {

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
        <button
          className = {cardLikeButtonClassName}
          type = "button"
          onClick = {handleLikeClick}
        ></button>
      </div>
      <h3 className = "card__time">{ props.time }</h3>
    </div>
  )
}

export default MoviesCard;