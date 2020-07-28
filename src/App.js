import React from 'react';
import './App.scss';
import {SignInandSignout} from './page/sign-in-and-sign-up/sign-in-sign-out'
import {Route,Switch } from 'react-router-dom';
import {Header} from './component/header/header';
import {HomePage} from './page/hompage/homepage';
import ShopPage from './page/shoppage/ShopPage';
import {auth, createUserProfileDocument} from  './firebase/firebase.util';

class App extends React.Component{
  
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsunscribeFromAuth =null

  componentDidMount(){
    this.unsunscribeFromAuth=auth.onAuthStateChanged(async userAuth=> 
    { 
        if(userAuth)
        {
          const userRef =await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapshot=>{
            this.setState({currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }},()=>console.log(this.state));
            
          });
        }
        else{
          this.setState({currentUser:userAuth});
        }
    }
    )
  }
  componentWillUnmount(){

    this.unsunscribeFromAuth();
  }
  render(){
   return (
    <div >
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact component={HomePage} path='/'/>
        <Route exact component={ShopPage} path='/shop'/>
        <Route exact component={SignInandSignout} path='/signin'/>
      </Switch>
        {/* Hello world !! */}
    </div>
  );
  }
}

export default App;
