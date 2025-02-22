import React from 'react';
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import './App.css';
import retrieveAllData from './actions/beers/retrieveBeersAsync'
import Profile from './components/Profile'
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import Beer from './components/IndividualBeerPage/Beer'
import HomePage from './components/HomePage'
import Callback from './components/Callback'




const store = createStore(reducer, middleware)

export default class App extends React.Component {
  
    componentDidMount() {
        console.log("The App component is mounting")
        const isAuthenticated = localStorage.getItem("isAuthenticated")

        const logged_in = localStorage.getItem("logged in")
        !logged_in && localStorage.setItem("logged in", "false")
        store.dispatch(retrieveAllData())
    

  }

    render(){
      return (
        <Provider store={store}>

        <Router>
          <Navbar/>
          <div className="App">
            <Route path='/' exact component={HomePage}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/beer-page' component={Beer}/>
            <Route path='/callback' component={Callback}/>
          </div>

        </Router>
        </Provider>

      );
    }

  }


