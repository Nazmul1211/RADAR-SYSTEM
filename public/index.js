// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUziL18MnZOGgviTaHb3H02Ei9P_RP6-0",
  authDomain: "radar-system-4b06b.firebaseapp.com",
  databaseURL: "https://radar-system-4b06b-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "radar-system-4b06b",
  storageBucket: "radar-system-4b06b.firebasestorage.app",
  messagingSenderId: "600285062891",
  appId: "1:600285062891:web:5f731d544137367dfbc0ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onMessage(messaging, (payload) => {
  console.log('Message received: ', payload);
  // Update your React UI here
});