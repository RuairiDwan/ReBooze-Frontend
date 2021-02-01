import { useAuth0 } from "@auth0/auth0-react";

const api = "https://rebooze.herokuapp.com"
//const api = "http://127.0.0.1:5000"


var obj = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }

export const getBeers = () =>
  fetch(`${api}/beers`, obj)
  .then(res => res.json())

export const getRatings = (data) =>
  fetch(`${api}/beerratings/1`, obj)
  .then(res => res.json())

export const submitRating = (data) =>
  fetch(`${api}/beerratings`, {
    method: 'POST',
    headers: {
      ...obj.headers,
    },
    body: JSON.stringify(data)
  })

export const getVotes = () =>
    fetch(`${api}/votes/3`, obj)
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

  