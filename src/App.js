import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shopPage';
import Header from './components/header/header';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up'
import Checkout from './components/checkout/checkout'
import { setCurrentUser } from './redux/user/user.actions';
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors';
import { auth } from './firebase/firebase.utils';
import './App.css';

class App extends  React.Component{
 
  unsubscribeFromAuth=null;
  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      setCurrentUser(user)
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
 render(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={Checkout}/>
        <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInSignUp/>
              )
            }
          />
      </Switch>
    </div>
  );
 }
}


/* 1
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});
*/
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);