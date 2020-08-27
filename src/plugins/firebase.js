import * as firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

// Import needed firebase modules
import "firebase/auth";

// Firebase app config
const config = {
  apiKey: process.env.VUE_APP_FB_API_KEY,
  authDomain: process.env.VUE_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FB_DATABASE_URL,
  projectId: process.env.VUE_APP_FB_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FB_APP_ID
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