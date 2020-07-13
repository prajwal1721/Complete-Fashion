import React from 'react';
import './App.css';
import {Route,Switch } from 'react-router-dom';
import {HomePage} from './page/homepage'
const Hats=()=>{
  return(
    <div>
      <h1>
        Hats Page
      </h1>
    </div>
  )
}
function App() {
  return (
    <div >
      {/* <HomePage/> */}
      <Switch>
        <Route component={Hats} path='/shop/hats'/>
        <Route exact component={HomePage} path='/'/>
      </Switch>
        {/* Hello world !! */}
    </div>
  );
}

export default App;
