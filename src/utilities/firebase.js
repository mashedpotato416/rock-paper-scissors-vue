import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCEraMSVqT9w2XM-eouXw13bBI4Aj8-nO4",
  authDomain: "rock-paper-scissors-vue-10eaf.firebaseapp.com",
  projectId: "rock-paper-scissors-vue-10eaf",
  databaseURL: "https://rock-paper-scissors-vue-10eaf-default-rtdb.firebaseio.com/",
  storageBucket: "rock-paper-scissors-vue-10eaf.appspot.com",
  messagingSenderId: "203431482816",
  appId: "1:203431482816:web:1d5c9d646ddaf03e47e425"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
