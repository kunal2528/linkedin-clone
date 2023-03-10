import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEq-1CzGkJMNC6z4QJYicK4toIpEZ5QcI",
  authDomain: "linkedin-clone-8e16d.firebaseapp.com",
  projectId: "linkedin-clone-8e16d",
  storageBucket: "linkedin-clone-8e16d.appspot.com",
  messagingSenderId: "135544539878",
  appId: "1:135544539878:web:8befbb65f7f5af512d0927"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};