import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBBZwcF9aq6lrmk93pUqU_DISLm7H2I_YA',
  authDomain: 'mental-chatbot-6e85a.firebaseapp.com',
  projectId: 'mental-chatbot-6e85a',
  storageBucket: 'mental-chatbot-6e85a.appspot.com',
  messagingSenderId: '705664951129',
  appId: '1:705664951129:web:2740a3ebae89264537a248',
  measurementId: 'G-K1KTE10GF8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
