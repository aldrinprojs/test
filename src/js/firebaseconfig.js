// Use compat versions since your HTML uses firebase-app-compat.js
const firebaseConfig = {
  apiKey: "AIzaSyAhxtt-73sHbqnEnc5LIfpjfx7Rfpgr_Lw",
  authDomain: "attendance-monitrong-system.firebaseapp.com",
  projectId: "attendance-monitrong-system",
  storageBucket: "attendance-monitrong-system.firebasestorage.app",
  messagingSenderId: "934523492186",
  appId: "1:934523492186:web:9fe2bff69e82548b5dc563",
  measurementId: "G-R1PSDV16G7"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
