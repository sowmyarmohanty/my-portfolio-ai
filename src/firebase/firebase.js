import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "my-portfolio-ai.firebaseapp.com",
  projectId: "my-portfolio-ai",
  storageBucket: "my-portfolio-ai.firebasestorage.app",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = firebase.auth(app);
export const firestore = getFirestore(app);
