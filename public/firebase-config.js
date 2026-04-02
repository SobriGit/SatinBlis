// 1. Import menggunakan Link CDN agar tidak error di browser
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// 2. Konfigurasi ASLI milikmu (Sudah saya sesuaikan)
const firebaseConfig = {
  apiKey: "AIzaSyAKO4uUaCR2x2KOMzisQfiW02_7nYvD7U0",
  authDomain: "satinblis.firebaseapp.com",
  projectId: "satinblis",
  storageBucket: "satinblis.firebasestorage.app",
  messagingSenderId: "182608808559",
  appId: "1:182608808559:web:c65058b9ff11111a149b9a",
  measurementId: "G-5EHGPNJ3LM"
};

// 3. Inisialisasi
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// 4. EXPORT SEMUA (Penting agar Admin.html tidak error 'not defined')
export { 
    db, auth, collection, addDoc, getDocs, doc, updateDoc, 
    deleteDoc, onSnapshot, setDoc, getDoc,
    signInWithEmailAndPassword, onAuthStateChanged, signOut 
};