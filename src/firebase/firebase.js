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
  apiKey: "AIzaSyAg0Qi4qAnCv8WDt9pQfjkrotBrpzesrsM",
  authDomain: "my-portfolio-ai.firebaseapp.com",
  projectId: "my-portfolio-ai",
  storageBucket: "my-portfolio-ai.firebasestorage.app",
  messagingSenderId: "1018102521023",
  appId: "1:1018102521023:web:8438f2f6de1a443e497a0a",
  measurementId: "G-P15M85K3DW"
};
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = firebase.auth(app);
export const firestore = getFirestore(app);
