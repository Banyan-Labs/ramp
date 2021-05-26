import firebase from 'firebase'

 var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCw1Wi0mbeUH26gQEEMNukxACCPAAWdOMg",
    authDomain: "react-contact-form-29876.firebaseapp.com",
    projectId: "react-contact-form-29876",
    storageBucket: "react-contact-form-29876.appspot.com",
    messagingSenderId: "268930667472",
    appId: "1:268930667472:web:6723a67d7aa9f45a84dfd5"
  });

   var db = firebaseApp.firestore();

   export { db };

