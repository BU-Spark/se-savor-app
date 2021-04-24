import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebaseui/dist/firebaseui.css'



const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});

export const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //firebase.auth.AppleAuthProvider.PROVIDER_ID
    ],

    
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () =>{
        //this.props.history.push('/');
        return false
      } ,
    },
  };

firebase.firestore().settings({ timestampsInSnapshots: true });
export const firestoredb = firebase.firestore();
export const auth = app.auth();
export default app;

//signInWithPopup
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    // console.log(res.user)
  }).catch((error) => {
    // console.log(error.message)
  })
}