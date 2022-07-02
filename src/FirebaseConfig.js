// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  //   apiKey: 'AIzaSyB8hqiMW--LU82xLILus_amLWqMeAeiwpY',
  //   authDomain: 'vizza-b0914.firebaseapp.com',
  //   projectId: 'vizza-b0914',
  //   storageBucket: 'vizza-b0914.appspot.com',
  //   messagingSenderId: '107336587806',
  //   appId: '1:107336587806:web:5e2e242ad4310226346c0f',
  //   measurementId: 'G-0ENFK3FGKZ',
};

const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);

const firebaseConfig = {
  auth,
};

export default firebaseConfig;
