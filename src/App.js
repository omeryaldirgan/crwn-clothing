import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import {Route,Switch} from 'react-router-dom';

const hatsPage=()=>(
  <div>Hats Page</div>
)
function App() {
  return (
    <div>
     <Switch>
       <Route exact path='/' component={HomePage}/>
       <Route path='/shop/hats' component={hatsPage}/>
     </Switch>
    </div>
  );
}

export default App;
