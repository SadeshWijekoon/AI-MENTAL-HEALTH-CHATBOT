import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user info in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        email,
        uid: user.uid,
      });

      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Store user info in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        firstName: user.displayName.split(' ')[0],
        lastName: user.displayName.split(' ')[1] || '',
        email: user.email,
        uid: user.uid,
      });

      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Signup</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSignup}>
          <button
            type="button"
            onClick={handleGoogleSignup}
            className="w-full bg-red-600 text-white p-2 rounded-lg mb-4 hover:bg-red-700"
          >
            Sign up with Google
          </button>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
