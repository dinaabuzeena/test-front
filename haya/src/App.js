import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';

import FavFruit from './component/FavFruit';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


 class App extends  Component {
  render() {
    const {isAuthenticated}=this.props.auth0;
    return (
      <>
        <Router>
          <Header/>
          <Switch>


            <Route exact path="/">
            {isAuthenticated?<Home/>:<login/>}
            </Route>

            <Route exact path="/favFruit">
            {isAuthenticated?<FavFruit/>:<login/>}
            </Route>


          </Switch>
          <Footer/>
        </Router>
      </>
    )
  }
}

export default withAuth0 (App)
