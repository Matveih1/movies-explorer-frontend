

class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _returnRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(this._baseUrl, {
      headers: this._headers,
      method: "GET",
    })
    .then(res => this._returnRes(res));
  }

}


  const moviesApi = new Api({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
      'Content-Type': 'application/json'
    }
  }); 
  
  export default moviesApi;
  
