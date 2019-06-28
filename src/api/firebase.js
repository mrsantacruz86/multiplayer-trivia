import * as admin from 'firebase-admin';
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bibletrivia-online-game.firebaseio.com"
});

const db = admin.firestore();
db.settings({timestampsInSnapshots: true});

const loadFromDB = (cb) => {
  db.collection('questions').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
      cb(snapshot.docs.data);
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
}

export default loadFromDB;


