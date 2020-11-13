import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import logo from './logo.svg';
import './App.css';
import { receiveBeers } from './actions/beers';
import retrieveAllBeerData from './actions/retrieveAllBeerData'
import Profile from './components/Profile'
import beers from './reducers/beers';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import SearchBeers from './components/SearchBeers';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'
import { retrieveUserData } from './actions/retrieveUserData';
import * as API from './API'





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

    

    store.dispatch(retrieveAllBeerData())

    



    store.dispatch(retrieveUserData({
      "name": "",
      isAuthetiacted: false
    }))
  }

    render(){
      console.log("Beers in store")
      console.log(store.beers)
      return (
        <div className="App">
          <Provider store={store}>
            <LoginButton/>
            <LogoutButton/>
            <Profile/>
            <Router>
              <Navbar />
              </Router>
              <Header />
              <SearchBeers />
          </Provider>

        </div>

      );
    }

  }


