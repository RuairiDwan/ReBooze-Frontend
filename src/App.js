import React from 'react';
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import LoginButton from './components/navbar/LoginButton'
import LogoutButton from './components/LogoutButton'
import BeerList from './components/BeerList'
import logo from './logo.svg';
import './App.css';
import { retrieveBeers } from './actions/beers/retrieveBeers';
import retrieveAllData from './actions/beers/retrieveBeersAsync'
import Profile from './components/Profile'
import beers from './reducers/beers';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import SearchBeers from './components/SearchBeers';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import  retrieveUserData from './actions/users/retrieveUserData';
import * as API from './API'
import Beer from './components/Beer'
import HomePage from './components/HomePage'
import CreateRating from './components/CreateRating'
import beerPageSelection from './actions/beers/beerPageSelection'




const store = createStore(reducer, middleware)

export default class App extends React.Component {
  
  componentDidMount () {

    store.dispatch(retrieveAllData())
    
    store.dispatch(retrieveUserData({
      "name": "",
      isAuthenticated: false
    }))

    store.dispatch(beerPageSelection(""))
  }

    render(){
      return (
        <Provider store={store}>

        <Router>
          <Navbar/>
          <div className="App">
            <Route path='/' exact component={HomePage}/>
            <Route path='/rate' component={CreateRating}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/beer-page' component={Beer}/>
          </div>

        </Router>
        </Provider>

      );
    }

  }


