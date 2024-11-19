// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FIREBASE_API_KEY } from "../utils/apiKeys";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "food-delivery-7ba3c.firebaseapp.com",
  projectId: "food-delivery-7ba3c",
  storageBucket: "food-delivery-7ba3c.appspot.com",
  messagingSenderId: "305626680888",
  appId: "1:305626680888:web:407cec2b4943201f5260cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
