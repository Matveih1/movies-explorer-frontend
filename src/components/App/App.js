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

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const history = useHistory();

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

  return (
    <>
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
          <Movies/>
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
    </>
  );
}

export default App;
