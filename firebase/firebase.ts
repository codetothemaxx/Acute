import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTkbdv5jWo9S4sZ8niJfS17z1TEBtziZc",
    authDomain: "acute-303c1.firebaseapp.com",
    projectId: "acute-303c1",
    storageBucket: "acute-303c1.appspot.com",
    messagingSenderId: "9515086383",
    appId: "1:9515086383:web:d8b2aab7cfbf4afca2ccda",
    measurementId: "G-YP8TB94WXC"
  };

let firebaseApp;
if (!firebase.getApps().length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.getApp();
}
export const db = getFirestore(firebaseApp);
export const auth = getAuth();
export default firebase;

const app = initializeApp(firebaseConfig);
