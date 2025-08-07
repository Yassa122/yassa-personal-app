import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration
// You'll need to replace these with your actual Firebase project credentials
const firebaseConfig = {
    apiKey: "AIzaSyCz_FCuiEwOEDk8qPQ2T2ZV0WI9n4sSNoM",
    authDomain: "portfolio-b47a5.firebaseapp.com",
    projectId: "portfolio-b47a5",
    storageBucket: "portfolio-b47a5.firebasestorage.app",
    messagingSenderId: "390617834341",
    appId: "1:390617834341:web:a023b6e9791f267bbaf78c",
    measurementId: "G-HJG55EDSCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (optional)
export const analytics = getAnalytics(app);

export default app; 