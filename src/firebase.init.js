import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZNtk44535AJLyXGx2QKrjXjbcGm3v9kY",
    authDomain: "perfumes-11.firebaseapp.com",
    projectId: "perfumes-11",
    storageBucket: "perfumes-11.appspot.com",
    messagingSenderId: "479898961879",
    appId: "1:479898961879:web:39ffa8084b83ad759c6d92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;