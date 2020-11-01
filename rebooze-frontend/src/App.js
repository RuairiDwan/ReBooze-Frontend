import React from 'react';
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import LoginButton from './components/LoginButton'
import logo from './logo.svg';
import './App.css';
import { receiveBeers } from './actions/beers';
import beers from './reducers/beers';

const store = createStore(reducer, middleware)

export default class App extends React.Component {
componentDidMount () {
  var obj = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch('https://rebooze.herokuapp.com/beers', obj)
  .then((response) => response.json())
  .then((responseData) => {
    console.log('Beers Request', responseData)
    store.dispatch(receiveBeers(responseData))
  })
}

  render(){
    console.log(store.getState())
    return (
      <div className="App">
        <div>
          <LoginButton/>

        </div>
        <p>
          Welcome to ReBooz
        </p>
  
      </div>
    );
  }

  }


