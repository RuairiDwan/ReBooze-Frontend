import React from 'react';
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import BeerList from './components/BeerList'
import logo from './logo.svg';
import './App.css';
import { receiveBeers } from './actions/beers';
import retrieveAllData from './actions/retrieveAllData'
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
store.dispatch(retrieveAllData())
export default class App extends React.Component {
  
  componentDidMount () {

    store.dispatch(retrieveAllData())

    API.submitRating()

    store.dispatch(retrieveUserData({
      "name": "",
      isAuthenticated: false
    }))
  }

    render(){
      return (
        <div className="App">
          <Provider store={store}>
            <LoginButton/>
            <LogoutButton/>
            <Profile/>
            <Router>
              <Navbar/>
              </Router>
              <Header />
              <SearchBeers />
              <BeerList/>
          </Provider>

        </div>

      );
    }

  }


