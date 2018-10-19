import admin from 'firebase-admin';
import serviceAccount from '../serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bibletrivia-online-game.firebaseio.com"
});

const db = admin.firestore();

const loadFromDB = (cb) => {
  db.collection('questions').get()
    .then((snapshot) => {
      // snapshot.forEach((doc) => {
      //   console.log(doc.id, '=>', doc.data());
      // });
      cb(snapshot);
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
}

export default loadFromDB;


