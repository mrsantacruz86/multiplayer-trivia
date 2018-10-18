import * as admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';
// import {connect} from 'react-redux';
import { loadQuestions } from '../actions/gameActions';
import store from '../store';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bibletrivia-online-game.firebaseio.com"
});

const db = admin.firestore();

const loadFromDB = () => {
  db.collection('questions').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
      store.dispatch(loadQuestions(snapshot))
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
}

export default loadFromDB;


