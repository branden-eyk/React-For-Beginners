import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyD94hLuM7gnCZ_Sz11aBVQBEK5WtLCkigQ",
    authDomain: "catch-of-the-day-232b7.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-232b7-default-rtdb.firebaseio.com",
  });

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;