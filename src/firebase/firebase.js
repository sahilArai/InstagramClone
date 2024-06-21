import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAumNEd62k1lgwPhfaJMzSQB5jJdYCQjlI",
  authDomain: "instagram-clone-ce39d.firebaseapp.com",
  projectId: "instagram-clone-ce39d",
  storageBucket: "instagram-clone-ce39d.appspot.com",
  messagingSenderId: "915711824552",
  appId: "1:915711824552:web:fb0e8de3871685787d689d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, auth, firestore, storage }