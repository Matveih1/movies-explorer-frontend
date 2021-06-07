import { BASE_URL, MoviesApiUrl } from './config';

class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getHeaders() {
    const current_token = localStorage.getItem('jwt');

    return {
      ...this._headers,
      'Authorization': `Bearer ${current_token}`,
    }
  }

  _returnRes(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  } 
  
  register = (email, password, name) => {

    console.log(email, password, name);

    return fetch(`${this._baseUrl}/signup`, {   
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password, name }),
    })
    .then(this._returnRes)
  } 

  authorize = (email, password) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({password, email})
    })
    .then(this._returnRes)
  }; 

  postMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: "https://api.nomoreparties.co" + data.image.url,
        trailer: data.trailerLink,
        thumbnail: "https://api.nomoreparties.co" + data.image.formats.thumbnail.url,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    })
    .then(this._returnRes);
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this.getHeaders(),
    })
    .then(this._returnRes);
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: this.getHeaders(),
    })
    .then(this._returnRes);
  }
}

const mainApi = new Api({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
}); 

export default mainApi;
