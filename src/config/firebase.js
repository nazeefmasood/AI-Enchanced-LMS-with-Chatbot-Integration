// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6kkz9yNjthTzu8vGULBRafD-4B1Hnc_o",
  authDomain: "fypp-73cd2.firebaseapp.com",
  projectId: "fypp-73cd2",
  storageBucket: "fypp-73cd2.appspot.com",
  messagingSenderId: "1044676421219",
  appId: "1:1044676421219:web:0c0ce6c2d11fb32010fa56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
