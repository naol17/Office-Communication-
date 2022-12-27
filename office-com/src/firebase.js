import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUhHz7FlQG9PuJV7HFSHtfh11aIaMYuCY",
  authDomain: "office-com-6bc7b.firebaseapp.com",
  projectId: "office-com-6bc7b",
  storageBucket: "office-com-6bc7b.appspot.com",
  messagingSenderId: "269487998699",
  appId: "1:269487998699:web:c28ce478ab7bc6d97ce0ae",
  measurementId: "G-PZ2LF2ZQEC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore();
