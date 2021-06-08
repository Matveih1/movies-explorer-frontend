import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import "./App.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import { MoviesContext, SavedMoviesContext, CurrentUserContext } from "../../contexts/contexts";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();

  const [currentUser, setCurrentUser] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [moviesLike, setMoviesLike] = React.useState([]);
  const [moviesFilter, setMoviesFilter] = React.useState([]);

  function filteredMovies(source, searchFilm, shortFilm) {
    let result = [];

    if (source && source.length > 0 && searchFilm !== "") {
      result = source.reduce((arr, item) => {
        if (shortFilm) {
          if (item.nameRU.includes(searchFilm) && item.duration <= 40) {
            arr.push(item);
          }
        } else {
          if (item.nameRU.includes(searchFilm)) {
            arr.push(item);
          }
        }

        return arr;
      }, []);
    }

    //return result;
    console.log("!!!!filteredMovies", source, searchFilm, shortFilm, result);
    setMoviesFilter([...[], ...result]);
  }

  function setFieldLike() {
    // console.log('movies', movies);
    // console.log('savedMovies', savedMovies);

    if (savedMovies && moviesFilter) {
      moviesFilter.map((current) => {
        const movie = savedMovies.find((item) => item.movieId === current.id);
        if (movie) {
          current.liked = true;
          current.savedId = movie._id;
        } else {
          current.liked = false;
        }

        return current;
      });
    }

    // setMoviesLike(movies);
    setMoviesLike([...[], ...moviesFilter]);

    console.log("moviesLike", moviesLike);
  }

  // получим все фильмы залогиненного пользователя
  function getSavedMovies() {
    console.log("getSavedMovies");

    mainApi
      .getSavedMovies()
      .then((data) => {
        setSavedMovies([...[], ...data]);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function tokenCheck() {
    console.log("tokenCheck");
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
        .getUser()
        .then((res) => {
          setLoggedIn(true);
          console.log(res);
          setCurrentUser(res);
          //получим сохраненные карточки пользователя
          getSavedMovies();
          history.push("/movies");
        })
        .catch(() => history.push("/"));
    }
  }

  function handleLogin({ email, password }) {
    console.log("handleLogin ", email, password);

    return mainApi.authorize(email, password).then((data) => {
      console.log(data);
      if (!data || data.statusCode === 400) {
        // openInfoPopup(false);
        // throw new Error('Что-то пошло не так');
      }
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        tokenCheck();
      }
    });
  }

  function handleRegister({ email, password, name }) {
    console.log(email);
    console.log(password);
    // history.push('/sing-in');

    return mainApi
      .register(email, password, name)
      .then((data) => {
        if (!data || data.statusCode === 400) {
          console.log("Что-то пошло не так", data.maessage);
          //throw new Error('Что-то пошло не так');
        }
        //openInfoPopup(true);
        history.push("/sing-in");
        return data;
      })
      .catch(() => {
        //openInfoPopup(false);
      });
  }

  function handleProfile(name, email) {
    mainApi
      .patchUsers(name, email)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleMovies(searchFilm, shortFilm) {
    console.log("handleMovies");
    console.log(searchFilm, shortFilm);

    setLoading(true);

    console.log("movies.length = ", movies.length);

    if (movies.length === 0) {
      setLoading(true);

      moviesApi
        .getMovies()
        .then((data) => {
          setMovies([...[], ...data]);
          filteredMovies(data, searchFilm, shortFilm);

          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      filteredMovies(movies, searchFilm, shortFilm);
      setLoading(false);
    }
  }

  function handleSavedMovies(searchFilm, shortFilm) {
    console.log("handleSavedMovies");
    console.log(searchFilm, shortFilm);

    setLoading(true);

    if (savedMovies.length === 0) {
      setLoading(true);

      mainApi
        .getSavedMovies()
        .then((data) => {
          setSavedMovies([...[], ...data]);
          filteredMovies(data, searchFilm, shortFilm);

          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      filteredMovies(savedMovies, searchFilm, shortFilm);
      setLoading(false);
    }
  }

  function handleSignOut() {
    console.log("handleSingOut");

    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setMovies([]);
    setSavedMovies([]);
    history.push("/");
  }

  function handleDeleteMovie(movieId) {
    return mainApi
      .deleteMovie(movieId)
      .then((data) => {
        getSavedMovies();

        const index = moviesFilter.findIndex((item) => item._id === movieId);

        if (index > -1) {
          moviesFilter.splice(index, 1);
        }

        return data;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  }

  async function handleLikeCard(card) {
    console.log("handleLikeCard", card);
    if (card.liked) {
      // await handleDeleteMovie(card.savedId);
      await mainApi
        .deleteMovie(card.savedId)
        .then((data) => {
          getSavedMovies();
          return data;
        })
        .catch((err) => {
          console.log(err);
          return null;
        });
    } else {
      await mainApi.postMovie(card);
      // .then((data) => {
      //   return data
      // })
      // .catch((err) => {
      //   console.log(err)
      //   return null;
      // });
      getSavedMovies();
    }
  }

  React.useEffect(() => {
    setFieldLike();
  }, [moviesFilter, savedMovies]);

  // React.useEffect(() => {
  //   tokenCheck();
  // }, [tokenCheck])

  return (
    <MoviesContext.Provider value={moviesLike}>
      <SavedMoviesContext.Provider value={savedMovies}>
        <CurrentUserContext.Provider value={currentUser}>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/sing-in">
              <Login onLogin={handleLogin} />
            </Route>
            <Route path="/sing-up">
              <Register onRegister={handleRegister} />
            </Route>
            <Route path="/notfound">
              <NotFound />
            </Route>
            <ProtectedRoute
              path="/movies"
              loggedIn={loggedIn}
              component={Movies}
              onMovies={handleMovies}
              handleLikeCard={handleLikeCard}
            />
            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}
              onMovies={handleSavedMovies}
              loggedIn={loggedIn}
              handleDeleteMovie={handleDeleteMovie}
            />
            <ProtectedRoute
              path="/profile"
              component={Profile}
              onSignOut={handleSignOut}
              onUpdate={handleProfile}
              loggedIn={loggedIn}
            />
          </Switch>
          {loading && <Preloader />}
        </CurrentUserContext.Provider>
      </SavedMoviesContext.Provider>
    </MoviesContext.Provider>
  );
}

export default App;
