
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBuGb2dJq8Kuym9fa_4Zof0j4drjBsHMwQ",
  authDomain: "minhareceita-6b083.firebaseapp.com",
  projectId: "minhareceita-6b083",
  storageBucket: "minhareceita-6b083.firebasestorage.app",
  messagingSenderId:  "970810704562",
  appId: "1:970810704562:web:cd6f2db7713655e372ffab"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);

