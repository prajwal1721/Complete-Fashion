import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const  config= {
    apiKey: "AIzaSyDtAWjPo7GvBw9u7I6I3RsiYS3RazrUUWM",
    authDomain: "react-project-85897.firebaseapp.com",
    databaseURL: "https://react-project-85897.firebaseio.com",
    projectId: "react-project-85897",
    storageBucket: "react-project-85897.appspot.com",
    messagingSenderId: "31695260608",
    appId: "1:31695260608:web:0ce97ac33b8179ca0a9625",
    measurementId: "G-7B85HJ70NK"
  }


  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore =firebase.firestore();

export const createUserProfileDocument = async (userAuth, additonalData) =>{
  if(!userAuth)return;
  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot =await userRef.get();
  console.log(snapShot);
  if(!snapShot.exists){
    const {displayName, email }=userAuth;
    const createdAt =new Date();
  try {
    await userRef.set({
      displayName,
      email,
      createdAt,...additonalData
    })
  }catch(error){
    console.log('error creating user', error.message);
  }
  }
  return userRef; 
}

//   googel authentication 
const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;