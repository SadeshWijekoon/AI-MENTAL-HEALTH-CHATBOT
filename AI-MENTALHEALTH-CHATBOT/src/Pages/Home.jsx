import { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [firstName, setFirstName] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        setUser(authUser);
        try {
          const userDoc = await getDoc(doc(db, 'users', authUser.uid));
          if (userDoc.exists()) {
            setFirstName(userDoc.data().firstName);
          } else {
            console.warn('No user data found in Firestore');
          }
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        }
      } else {
        setUser(null);
        setFirstName('');
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Hi {firstName || 'Guest'}, Welcome to Medi Help!
      </h1>
      {user ? (
        <button onClick={handleLogout} className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700">
          Logout
        </button>
      ) : (
        <div>
          <button onClick={() => navigate('/signup')} className="bg-blue-600 text-white p-2 rounded-lg mr-4">
            Sign Up
          </button>
          <button onClick={() => navigate('/login')} className="bg-green-600 text-white p-2 rounded-lg">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
