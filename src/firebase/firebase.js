import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
/*
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
*/
const firebaseConfig = {
  apiKey: "AIzaSyAjhMRlfrdfHQI11qTH7EEkwjwLbyO-Vww",
  authDomain: "workspace-ui.firebaseapp.com",
  projectId: "workspace-ui",
  storageBucket: "workspace-ui.appspot.com",
  messagingSenderId: "99887960316",
  appId: "1:99887960316:web:b34fac7b2734e55dc34779",
  measurementId: "G-TY9N81X663"
};
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = firebase.auth(app);
export const firestore = getFirestore(app);
/*
const firebaseConfig = {
  apiKey: "AIzaSyAjhMRlfrdfHQI11qTH7EEkwjwLbyO-Vww",
  authDomain: "workspace-ui.firebaseapp.com",
  projectId: "workspace-ui",
  storageBucket: "workspace-ui.appspot.com",
  messagingSenderId: "99887960316",
  appId: "1:99887960316:web:b34fac7b2734e55dc34779",
  measurementId: "G-TY9N81X663"
};
*/