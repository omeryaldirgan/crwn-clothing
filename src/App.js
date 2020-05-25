import React from 'react';
import {Route,Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shopPage';
import Header from './components/header/header';
import signInSignUp from './pages/sign-in-sign-up/sign-in-sign-up'

import './App.css';



function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signIn' component={signInSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
