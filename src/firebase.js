// Your web app's Firebase configuration
import firebase from "@firebase/app";
import '@firebase/firestore'

let config = {
  apiKey: "AIzaSyCkr-aBhC8pbM-nKeJMde0kYi9h6NkRRaw",
  authDomain: "think-piece-live-a2444.firebaseapp.com",
  databaseURL: "https://think-piece-live-a2444.firebaseio.com",
  projectId: "think-piece-live-a2444",
  storageBucket: "think-piece-live-a2444.appspot.com",
  messagingSenderId: "415868366582",
  appId: "1:415868366582:web:43b84590839aa45b3546d7",
  measurementId: "G-7LK3NF0ED6",
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export const firestore = firebase.firestore()

window.firebase = firebase;

export default firebase;
