import firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCqo1sVlfQAP1aP0xTpbtnj7H-Wq0MgUbU",
    authDomain: "react-blog-88404.firebaseapp.com",
    databaseURL: "https://react-blog-88404-default-rtdb.firebaseio.com",
    projectId: "react-blog-88404",
    storageBucket: "react-blog-88404.appspot.com",
    messagingSenderId: "965641586248",
    appId: "1:965641586248:web:ceea83e0b0c1e8ea66ba7d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const database= firebase.database();
const provider = new firebase.auth.GoogleAuthProvider();

// firebase.auth().onAuthStateChanged(function(user){
//   if(user){
//     console.log(user)
//   }else{
//     console.log("user yok")
//   }
// })


export {database, provider, firebase}






 

