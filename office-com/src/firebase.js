import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAWeJiwgo3BNjaVFseuKovQSO8_k2Z6suA",

  authDomain: "mywspace-6833b.firebaseapp.com",

  projectId: "mywspace-6833b",

  storageBucket: "mywspace-6833b.appspot.com",

  messagingSenderId: "454969091054",

  appId: "1:454969091054:web:911fc133be7f0749ad24ff"

};


// const firebaseConfig = {
 
//   apiKey: "AIzaSyAF6WxnM3r_IU4w-LPD8p4P0SpQa1tPWDQ",

//   authDomain: "off-com.firebaseapp.com",

//   projectId: "off-com",

//   storageBucket: "off-com.appspot.com",

//   messagingSenderId: "196133445977",

//   appId: "1:196133445977:web:34877531e30e063c2a2c48"

// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore();


 // apiKey: "AIzaSyCUhHz7FlQG9PuJV7HFSHtfh11aIaMYuCY",
  // authDomain: "office-com-6bc7b.firebaseapp.com",
  // projectId: "office-com-6bc7b",
  // storageBucket: "office-com-6bc7b.appspot.com",
  // messagingSenderId: "269487998699",
  // appId: "1:269487998699:web:c28ce478ab7bc6d97ce0ae",
  // measurementId: "G-PZ2LF2ZQEC"