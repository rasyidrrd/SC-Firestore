// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_sFJ4IBz4xe19e9Xxlr6fqe09V4vtrOM",
    authDomain: "fir-test-1105c.firebaseapp.com",
    projectId: "fir-test-1105c",
    storageBucket: "fir-test-1105c.appspot.com",
    messagingSenderId: "238277700432",
    appId: "1:238277700432:web:8ed79e394909fc79001a55",
    measurementId: "G-V797ZF4KXZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { app };
