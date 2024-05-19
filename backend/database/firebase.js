// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6kkz9yNjthTzu8vGULBRafD-4B1Hnc_o",
  authDomain: "fypp-73cd2.firebaseapp.com",
  databaseURL: "https://fypp-73cd2-default-rtdb.firebaseio.com",
  projectId: "fypp-73cd2",
  storageBucket: "fypp-73cd2.appspot.com",
  messagingSenderId: "1044676421219",
  appId: "1:1044676421219:web:638032d77d7493ae10fa56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
