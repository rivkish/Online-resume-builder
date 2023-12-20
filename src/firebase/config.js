import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClnDE8DI-pNn3KGW6bu9eE9a1frHinBxQ",
    authDomain: "resume-718a4.firebaseapp.com",
    projectId: "resume-718a4",
    storageBucket: "resume-718a4.appspot.com",
    messagingSenderId: "384169796560",
    appId: "1:384169796560:web:778df2062761ee68370fd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage=getStorage(app)
// Get Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);