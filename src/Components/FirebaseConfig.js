// src/components/FirebaseConfig.jsx
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBUziL18MnZOGgviTaHb3H02Ei9P_RP6-0",
  authDomain: "radar-system-4b06b.firebaseapp.com",
  projectId: "radar-system-4b06b",
  databaseURL: "https://radar-system-4b06b-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "radar-system-4b06b.firebasestorage.app",
  messagingSenderId: "600285062891",
  appId: "1:600285062891:web:5f731d544137367dfbc0ae"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

console.log("Firebase database initialized:", database);

export default database;






// apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
// authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
// databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
// projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
// storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
// appId: import.meta.env.VITE_FIREBASE_APP_ID,
