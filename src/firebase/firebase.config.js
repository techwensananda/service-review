// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwiAIMKV0QhlaYt0-6k89t-CSNOYQ5D1I",
    authDomain: "alo-gym.firebaseapp.com",
    projectId: "alo-gym",
    storageBucket: "alo-gym.appspot.com",
    messagingSenderId: "700691498315",
    appId: "1:700691498315:web:cb097eb8d911f630ed14ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;