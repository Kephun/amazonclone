import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCvEEvDCjowyz75J1GCh82nLAcFZL9v9fE",
  authDomain: "clone-57120.firebaseapp.com",
  projectId: "clone-57120",
  storageBucket: "clone-57120.appspot.com",
  messagingSenderId: "1078364735275",
  appId: "1:1078364735275:web:cbdcaae3ea3de90609276e",
  measurementId: "G-5TD40JSS8W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };