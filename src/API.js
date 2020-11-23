const api = "https://rebooze.herokuapp.com"

var obj = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }

export const getBeers = () =>
  fetch(`${api}/beers`, obj)
  .then(res => res.json())

export const getRatings = () =>
  fetch(`${api}/beerratings`, obj)
  .then(res => res.json())

export const submitRating = () =>
  fetch(`${api}/beerratings`, {
    method: 'POST',
    headers: {
      ...obj.headers,
    },
    body: JSON.stringify({
      'beer_id': 1,
      'user_id': 1,
      'beer_rating': 4.2,
      'comment': "Beer was nice"      
    })
  })

  