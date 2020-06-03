import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyDfK0Mg0CAJXMc_Xb392Av-FvXqCMn3dmU",
    authDomain: "crwn-app-9f44b.firebaseapp.com",
    databaseURL: "https://crwn-app-9f44b.firebaseio.com",
    projectId: "crwn-app-9f44b",
    storageBucket: "crwn-app-9f44b.appspot.com",
    messagingSenderId: "175359789496",
    appId: "1:175359789496:web:34c26d1f45622b0611674d",
    measurementId: "G-EWN2C2EPD5"
}

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters ( {prompt:'select_account'} ) 
export const signInWithGoogle=()=>auth.signInWithPopup(provider);


export default firebase;
