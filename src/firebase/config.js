import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCHiPYSgDC0z7ZBuBrpwCb25JgFo2d7VEg',
  authDomain: 'vocational-guidance-23eb4.firebaseapp.com',
  databaseURL:
    'https://vocational-guidance-23eb4-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'vocational-guidance-23eb4',
  storageBucket: 'vocational-guidance-23eb4.appspot.com',
  messagingSenderId: '619671787944',
  appId: '1:619671787944:web:e7bff9286158e8134da59d',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
