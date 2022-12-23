import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCQ84UnVmS13hP4D5mFEvrwHDPBnWBXQd0",
  authDomain: "office-communication-a0c7f.firebaseapp.com",
  projectId: "office-communication-a0c7f",
  storageBucket: "office-communication-a0c7f.appspot.com",
  messagingSenderId: "634083081233",
  appId: "1:634083081233:web:bc4c22daac48caef3205b0",
  measurementId: "G-C4BLY9TBF9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);