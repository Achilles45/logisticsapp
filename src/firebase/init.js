import firebase from 'firebase'
import firestore from 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyCKJ79QTRZLRPi3c_9EwFevYoBa2dio-IU",
    authDomain: "delivery-b7261.firebaseapp.com",
    databaseURL: "https://delivery-b7261.firebaseio.com",
    projectId: "delivery-b7261",
    storageBucket: "delivery-b7261.appspot.com",
    messagingSenderId: "643049216299",
    appId: "1:643049216299:web:b80bb0e05f5b685733cd6e",
    measurementId: "G-EP96CE2FTY"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebaseApp.firestore()