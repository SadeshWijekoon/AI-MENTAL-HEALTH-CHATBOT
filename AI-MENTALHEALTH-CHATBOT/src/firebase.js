// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBBZwcF9aq6lrmk93pUqU_DISLm7H2I_YA',
  authDomain: 'mental-chatbot-6e85a.firebaseapp.com',
  projectId: 'mental-chatbot-6e85a',
  storageBucket: 'mental-chatbot-6e85a.firebasestorage.app',
  messagingSenderId: '705664951129',
  appId: '1:705664951129:web:2740a3ebae89264537a248',
  measurementId: 'G-K1KTE10GF8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export auth for use in other files
export { auth };