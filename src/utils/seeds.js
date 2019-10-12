import { db } from '../api/firebase';
import data from '../BibleQuestions.json';
const seedData = () => {
  data.map(item => {
    const seed = {
      text: item.text,
      ref: item.ref,
      choices: item.choices
    };
    db.collection('questions')
      .doc()
      .set(seed)
      .then(() => console.log('Document successfully written!'))
      .catch(err => console.error('Error writing document: ', err));
  });
};

export default seedData;
