import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCE_1adI5kx76nRrOh83Mou65Q5IrIfmmY",
    authDomain: "voice-todo-list-e5d77.firebaseapp.com",
    projectId: "voice-todo-list-e5d77",
    storageBucket: "voice-todo-list-e5d77.appspot.com",
    messagingSenderId: "953856293762",
    appId: "1:953856293762:web:bb3ddd0c5573ce7298ad9b",
    measurementId: "G-NYFCLSVTC0"
  };

  export const app = initializeApp(firebaseConfig);
  export const database = getFirestore(app);
