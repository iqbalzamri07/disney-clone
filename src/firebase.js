import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEYrTwPEBA5GAH7ilG3b6KlJUdSlYPDBM",
  authDomain: "disneyplus-1399f.firebaseapp.com",
  projectId: "disneyplus-1399f",
  storageBucket: "disneyplus-1399f.appspot.com",
  messagingSenderId: "957893949190",
  appId: "1:957893949190:web:c6c588ec3f90362cc29087",
  measurementId: "G-THKPXYLBJQ",
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

export default app;
