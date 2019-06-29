import * as firebase from "firebase/app";

// Firebase services that we are going to use
import "firebase/auth";
import "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc_syklcioRHhuyilM_aFU9sFzinSU7Uo",
  authDomain: "bibletrivia-online-game.firebaseapp.com",
  databaseURL: "https://bibletrivia-online-game.firebaseio.com",
  projectId: "bibletrivia-online-game",
  storageBucket: "bibletrivia-online-game.appspot.com",
  messagingSenderId: "598878297523",
  appId: "1:598878297523:web:38af070f1cade1a5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

// loadQuestion = async () => {
//   const questions = await db.collection("questions").get();
//   for (let doc of questions.docs) {
//     console.log(JSON.stringify(doc.data(), "", 2));
//   }
// };
