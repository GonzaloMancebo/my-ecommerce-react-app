// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrtmiMSXRSfnJxl3B7-LdpDVSloATQrcc",
  authDomain: "ecommerce-react-app-45234.firebaseapp.com",
  projectId: "ecommerce-react-app-45234",
  storageBucket: "ecommerce-react-app-45234.appspot.com",
  messagingSenderId: "51150735496",
  appId: "1:51150735496:web:b2bc1800c946981481b73d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)