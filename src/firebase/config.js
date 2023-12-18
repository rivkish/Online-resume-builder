// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyClnDE8DI-pNn3KGW6bu9eE9a1frHinBxQ",
//   authDomain: "resume-718a4.firebaseapp.com",
//   projectId: "resume-718a4",
//   storageBucket: "resume-718a4.appspot.com",
//   messagingSenderId: "384169796560",
//   appId: "1:384169796560:web:778df2062761ee68370fd5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);




import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyClnDE8DI-pNn3KGW6bu9eE9a1frHinBxQ",
    authDomain: "resume-718a4.firebaseapp.com",
    projectId: "resume-718a4",
    storageBucket: "resume-718a4.appspot.com",
    messagingSenderId: "384169796560",
    appId: "1:384169796560:web:778df2062761ee68370fd5"
};


initializeApp(firebaseConfig)


export const db = getFirestore();


