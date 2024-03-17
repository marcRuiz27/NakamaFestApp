// Import the functions you need from the SDKs you need

import { FirebaseApp, initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBUfcPsjLvcKW4ns0koLNP8eSqDHFuVC5U",
  authDomain: "prueba-df5b1.firebaseapp.com",
  databaseURL: "https://prueba-df5b1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "prueba-df5b1",
  storageBucket: "prueba-df5b1.appspot.com",
  messagingSenderId: "1010386208893",
  appId: "1:1010386208893:web:ea79871a8028878bcbc914"

};


export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)


// Initialize Firebase
const app = initializeApp(firebaseConfig);