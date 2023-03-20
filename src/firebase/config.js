import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD6Nawj4KSOPMBHWzBGWcSQe3rV9bH68LE",
  authDomain: "miniblog-d44b5.firebaseapp.com",
  projectId: "miniblog-d44b5",
  storageBucket: "miniblog-d44b5.appspot.com",
  messagingSenderId: "693515199264",
  appId: "1:693515199264:web:303e5bb8d09e9e572eed45"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};