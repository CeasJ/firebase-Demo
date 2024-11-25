// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi0EDZW9ZwwrUG1VHhc00y0h1WNc-DJy0",
  authDomain: "first-blog-a4f85.firebaseapp.com",
  projectId: "first-blog-a4f85",
  storageBucket: "first-blog-a4f85.firebasestorage.app",
  messagingSenderId: "524001346247",
  appId: "1:524001346247:web:afe804186af614722574e2",
  measurementId: "G-4X9ELYDBZJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
