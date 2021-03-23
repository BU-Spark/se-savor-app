import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCUHga2VBZX4m5qsP64yH4YaOamTUAp_Z0",
    authDomain: "annular-magnet-298821.firebaseapp.com",
    projectId: "annular-magnet-298821",
    storageBucket: "annular-magnet-298821.appspot.com",
    messagingSenderId: "770398609052",
    appId: "1:770398609052:web:fbf5f81e56ed59fbf99759",
    measurementId: "G-EDD1CDMTYS"
});
export const auth = app.auth();
export default app;