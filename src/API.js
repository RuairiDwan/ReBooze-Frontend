const api = "https://rebooze.herokuapp.com"

var obj = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }

export const getBeers = () =>
    fetch(`${api}/beers`, obj)
    .then(res => res.json())
