import React from 'react';
import './App.css';
import {Route,Switch } from 'react-router-dom';
import {HomePage} from './page/hompage/homepage';
import ShopPage from './page/shoppage/ShopPage';

function App() {
  return (
    <div >
      {/* <HomePage/> */}
      <Switch>
        <Route exact component={HomePage} path='/'/>
        <Route exact component={ShopPage} path='/shop'/>
      </Switch>
        {/* Hello world !! */}
    </div>
  );
}

export default App;
