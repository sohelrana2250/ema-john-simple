// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


/*apiKey: "AIzaSyABOTLhorghUSE65XowCLOGNfDULmJoXM4",
  authDomain: "ema-john-simple-a7a92.firebaseapp.com",
  projectId: "ema-john-simple-a7a92",
  storageBucket: "ema-john-simple-a7a92.appspot.com",
  messagingSenderId: "853262808476",
  appId: "1:853262808476:web:4e7ee600823a81b130c459"*/