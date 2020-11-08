import React from 'react';
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import logo from './logo.svg';
import './App.css';
import { receiveBeers } from './actions/beers';
import Profile from './components/Profile'
import beers from './reducers/beers';
import { useAuth0 } from '@auth0/auth0-react';
<<<<<<< HEAD
import { Provider } from 'react-redux'

=======
import Header from './components/Header';
import SearchBeers from './components/SearchBeers';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
>>>>>>> abbf60f0bd50791b09831227dd3d50ca55846c66

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
<<<<<<< HEAD
      <Provider store={store}>
        <div className="App">
          <div>
            <LoginButton props={store}/>
            <LogoutButton/>
            <Profile/>
          </div>
          <p>
            Welcome to ReBooz
          </p>   
=======
      <div className="App">
        <div>
          <LoginButton/>
          <LogoutButton/>
          <Profile/>
          <Router>
            <Navbar />
            </Router>
            <Header />
            <SearchBeers />

>>>>>>> abbf60f0bd50791b09831227dd3d50ca55846c66
        </div>
      </Provider>    

    );
  }

  }


