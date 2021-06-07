import React from 'react';
import { useLocation } from "react-router-dom";

import './MoviesCard.css';

function MoviesCard (props) {

  const location = useLocation();
  const cardLikeButtonClassName = `card__like ${props.movie.liked && 'card__like_active'}`; 
  const image = location.pathname === '/saved-movies' 
    ? props.movie.image
    : props.movie.image
      ? "https://api.nomoreparties.co" + props.movie.image.url
      : "#";
  const time = `${Math.trunc(props.movie.duration / 60)}ч ${props.movie.duration % 60}м`;

  function handleLikeClick() {
    props.onLikeCard(props.movie);
  }

  function deleteClik() {
    console.log(props.movie._id);
    props.onDeleteCard(props.movie._id);
  }

  return (
    <div className = "card">
      <a
        className = {'card__link'}
        href = {props.movie.trailerLink}
        target = "_blank"
        rel = "noreferrer"
      >
        <img
          className = "card__image"
          src = {image}
          alt = {props.movie.nameRU}
        />
      </a>  
      <div className = "card__info">
        <h2 className = "card__title">{ props.movie.nameRU }</h2>
        {location.pathname === '/saved-movies' ? (
          <button
            className = "card__delete"
            type = "button" 
            onClick = {deleteClik}
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