import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDcLS7WCBD1oE59Q4UBk2RSjkmpABEprrY",
  authDomain: "tomopiggery.firebaseapp.com",
  databaseURL: "https://tomopiggery.firebaseio.com",
  projectId: "tomopiggery",
  storageBucket: "tomopiggery.appspot.com",
  messagingSenderId: "325087179358"
};
firebase.initializeApp(config);

export default firebase;