// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const config = {
  //   apiKey: process.env.REACT_APP_API_KEY,
  apiKey: 'AIzaSyB8hqiMW--LU82xLILus_amLWqMeAeiwpY',
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  authDomain: 'vizza-b0914.firebaseapp.com',
  // projectId: process.env.REACT_APP_PROJECT_ID,
  projectId: 'vizza-b0914',
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  storageBucket: 'vizza-b0914.appspot.com',
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  messagingSenderId: '107336587806',
  // appId: process.env.REACT_APP_APP_ID,
  appId: '1:107336587806:web:5e2e242ad4310226346c0f',
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  measurementId: 'G-0ENFK3FGKZ',
};

const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const firebaseConfig = {
  auth,
  firestore,
  storage,
};

export default firebaseConfig;
