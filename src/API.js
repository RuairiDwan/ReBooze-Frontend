
//const api = "https://rebooze.herokuapp.com"
const api = "http://127.0.0.1:5000"

var obj = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    }
  }

export const getBeers = () =>
  fetch(`${api}/beers`, obj)
  .then(res => res.json())

export const getRatings = (beerID) =>
  fetch(`${api}/beerratings/${beerID}`, obj)
  .then(res => res.json())

export const submitRating = (data, token) =>
  fetch(`${api}/beerratings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(token)
    },
    body: JSON.stringify(data)
  })

export const deleteRating = (ratingID, token) =>
fetch(`${api}/beerratings/${ratingID}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': "Bearer ".concat(token)
  },
})


export const getVotes = (votesID) =>
    fetch(`${api}/votes/${votesID}`, obj)
        .then(res => res.json())

export const submitVote = (data) =>
    fetch(`${api}/votes`, {
        method: 'POST',
        headers: {
            ...obj.headers,
        },
        body: JSON.stringify(data)
    })

export const handleUserLogin = (data) => 
  fetch(`${api}/handlelogin`, {
    method: 'POST',
    headers: {
      ...obj.headers,
    },
    body: JSON.stringify(data)
})

  