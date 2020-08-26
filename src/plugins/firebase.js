import * as firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

// Import needed firebase modules
import "firebase/auth";

// Firebase app config
const config = {
  apiKey: "AIzaSyDxNiOHkk-kfy-WFb1f0qpsjfSTj1h8_m4",
  authDomain: "worgiphy.firebaseapp.com",
  databaseURL: "https://worgiphy.firebaseio.com",
  projectId: "worgiphy",
  storageBucket: "worgiphy.appspot.com",
  messagingSenderId: "744364657898",
  appId: "1:744364657898:web:ff2257d75cb01dc85d1b93"
};

// Init our firebase app
firebase.initializeApp(config);

// utils
const auth = firebase.auth()
const db = firebase.firestore()

// collection references
const favoritesCollection = db.collection('favorites')

// export utils/refs
export {
  db,
  auth,
  favoritesCollection
}