// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3NthFyn4oj09wjr2eLDsxcQDC-q29kuw",
  authDomain: "mod-52-dragonnews.firebaseapp.com",
  projectId: "mod-52-dragonnews",
  storageBucket: "mod-52-dragonnews.appspot.com",
  messagingSenderId: "290083067156",
  appId: "1:290083067156:web:3f731d5f4b2f90d5605e01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
