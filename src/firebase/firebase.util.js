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


//   googel authentication 
const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;