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

import moviesApi from '../../utils/MoviesApi';
import { MoviesContext } from '../../contexts/contexts'

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();

  const [movies, setMovies] = React.useState([]);

  function handleLogin({ email, password}) {
    console.log(email);
    console.log(password);
    setLoggedIn(true);
    history.push('/movies');
  }

  function handleRegister({ email, password}) {
    console.log(email);
    console.log(password);
    history.push('/sing-in');
  }  

  function handleMovies() {
    console.log('handleMovies');
    // if (movies.length === 0) {
      setLoading(true);

      moviesApi
        .getMovies()
        .then((data) => { 
          setMovies(data);
          // console.log(data);
          // console.log(movies.image.url);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err)
          setLoading(false);
        });
    // }
  }
  
  return (
    <MoviesContext.Provider value={movies}>
      <Switch>
        <Route exact path="/">
          <Main
            loggedIn
          />  
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
        <Route path="/movies">
          <Movies
            handleMovies = {handleMovies}
          />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/notfound">
          <NotFound/>
        </Route>
      </Switch>    
      {loading && <Preloader/>}
    </MoviesContext.Provider>
  );
}

export default App;
