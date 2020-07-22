import React from 'react';
import './App.scss';
import {SignInandSignout} from './page/sign-in-and-sign-up/sign-in-sign-out'
import {Route,Switch } from 'react-router-dom';
import {Header} from './component/header/header';
import {HomePage} from './page/hompage/homepage';
import ShopPage from './page/shoppage/ShopPage';

function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact component={HomePage} path='/'/>
        <Route exact component={ShopPage} path='/shop'/>
        <Route exact component={SignInandSignout} path='/signin'/>
      </Switch>
        {/* Hello world !! */}
    </div>
  );
}

export default App;
