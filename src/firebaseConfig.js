import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjqN0mFb4gG6Jo0HBgAzPFSUgEyZ2PQoI",
  authDomain: "proyecto-1175e.firebaseapp.com",
  projectId: "proyecto-1175e",
  storageBucket: "proyecto-1175e.appspot.com",
  messagingSenderId: "737963319725",
  appId: "1:737963319725:web:bdb809d0ecdcf013664124",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
