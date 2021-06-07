import React from 'react';
import { Route, Switch, useHistory} from 'react-router-dom';

import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Preloader from "../Preloader/Preloader";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { MoviesContext, SavedMoviesContext } from '../../contexts/contexts'

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();

  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [moviesLike, setMoviesLike] = React.useState([]);

  function setFieldLike() {
    console.log('movies', movies);
    console.log('savedMovies', savedMovies);

    if (savedMovies && movies) {
      movies.map((current) => {
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
    
    setMoviesLike(movies);

    console.log('moviesLike', moviesLike);
  }

  // получим все фильмы залогиненного пользователя
  function getSavedMovies() {
    console.log('getSavedMovies');

    mainApi.getSavedMovies()
      .then((data) => {
        setSavedMovies(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function tokenCheck() {    
    console.log('tokenCheck');
    // const jwt = localStorage.getItem('jwt');
    // if (jwt) {
    //   auth.getContent(jwt)
    //     .then(res => {
          setLoggedIn(true);
          //получим сохраненные карточки пользователя
          getSavedMovies();
          history.push('/movies');
    //     })
    //     .catch(() => history.push('/sing-in'));
    // }
  }

  function handleLogin({ email, password}) {

    console.log('handleLogin ', email, password);

    return mainApi.authorize(email, password)
    .then(data => {
      console.log(data);
      if (!data || data.statusCode === 400) {
        // openInfoPopup(false);
        // throw new Error('Что-то пошло не так');
      }
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        tokenCheck();
      }
    });
  }

  function handleRegister({ email, password, name}) {
    console.log(email);
    console.log(password);
    // history.push('/sing-in');

    return mainApi.register(email, password, name)
      .then(data => {
        if (!data || data.statusCode === 400) {
          //openInfoPopup(false);
          console.log('Что-то пошло не так', data.maessage);
          //throw new Error('Что-то пошло не так');
        }
        //openInfoPopup(true);
        history.push('/sing-in');
        return data;
      })
      .catch(() => {
        //openInfoPopup(false);
      });
  }  

  function handleMovies() {
    
    console.log('handleMovies');

    setLoading(true);
    moviesApi.getMovies()
      .then((data) => { 
        setMovies(data);
        //проставим лайк
        //setFieldLike();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
      });
  }

  function handleSignOut() {
    console.log('handleSingOut');

    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setMovies([]);
    setSavedMovies([]);
    history.push('/');
  }

  function handleDeleteMovie(movieId) {
    
    console.log('handleDeleteMovie', movieId);

    return mainApi.deleteMovie(movieId)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err)
        return null;
      });
  }


  async function handleLikeCard(card) {
    console.log('handleLikeCard', card);
    if (card.liked) {
      await handleDeleteMovie(card.savedId);
    }
    else {
      await mainApi.postMovie(card)
        // .then((data) => {
        //   return data 
        // })
        // .catch((err) => {
        //   console.log(err)
        //   return null;
        // });
    }

    getSavedMovies();
  }

  React.useEffect(() => {
    setFieldLike()
  }, [movies, savedMovies])
  
  return (
    <MoviesContext.Provider value={moviesLike}>
      <SavedMoviesContext.Provider value={savedMovies}>
        <Switch>
          <Route exact path="/">
            <Main/>  
          </Route>  
          <Route path="/sing-in">
            <Login 
              onLogin = {handleLogin} 
            />  
          </Route>
          <Route path="/sing-up">
            <Register 
              onRegister = {handleRegister}
            />  
          </Route>
          <Route path="/notfound">
            <NotFound/>
          </Route>
          <ProtectedRoute
            path = "/movies"
            loggedIn = {loggedIn}
            component = {Movies}
            onMovies = {handleMovies}
            handleLikeCard = {handleLikeCard}  
            handleDeleteMovie = {handleDeleteMovie}
          />
          <ProtectedRoute
            path = "/saved-movies"
            component = {SavedMovies}
            loggedIn = {loggedIn}
          />
          <ProtectedRoute
            path = "/profile"
            component = {Profile}
            onSignOut = {handleSignOut}
            loggedIn = {loggedIn}
          />
        </Switch>    
        {loading && <Preloader/>}
      </SavedMoviesContext.Provider>
    </MoviesContext.Provider>
  );
}

export default App;
