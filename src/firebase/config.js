// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgBU_omg2hfL8p_vg_cci4Bxbf_tQRlfI",
  authDomain: "perfumar-dc516.firebaseapp.com",
  projectId: "perfumar-dc516",
  storageBucket: "perfumar-dc516.appspot.com",
  messagingSenderId: "300194412445",
  appId: "1:300194412445:web:b7c6182d648a514655a174"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)  //para ser consumido por los demas .js