import React from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { MoviesContext } from "../../contexts/contexts";

function MoviesCardList(props) {
  const location = useLocation();
  const movies = React.useContext(MoviesContext);
  // const savedMovies = React.useContext(SavedMoviesContext);

  const isTablet = useMediaQuery({ query: "(max-width: 480px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const initState = isMobile ? 5 : isTablet ? 8 : 12;
  const increment = isMobile ? 2 : isTablet ? 2 : 3;
  const [numberOfCards, setNumberOfCards] = React.useState(initState);
  const isLastCard = movies.length >= numberOfCards;

  function showMore() {
    setNumberOfCards((prevValue) => prevValue + increment);
  }

  return (
    <>
      <section className="card-list">
        {location.pathname === "/movies"
          ? movies
              .slice(0, numberOfCards)
              .map((movie) => (
                <MoviesCard
                  key={movie.id}
                  movie={movie}
                  onLikeCard={props.onLikeCard}
                  onDeleteCard={props.onDeleteCard}
                />
              ))
          : movies.map((movie) => (
              <MoviesCard
                key={movie.movieId}
                movie={movie}
                onLikeCard={props.onLikeCard}
                onDeleteCard={props.onDeleteCard}
              />
            ))}
      </section>
      {location.pathname === "/movies" && isLastCard && (
        <section className="another">
          <button className="button-movies" onClick={showMore}>
            Ещё
          </button>
        </section>
      )}
    </>
  );
}

export default MoviesCardList;
