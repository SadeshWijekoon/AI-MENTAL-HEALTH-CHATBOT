// Navbar/Navbar.js
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <NavLink
          to="/"
          className="text-white text-lg font-semibold hover:text-blue-200"
        >
          Medi Help
        </NavLink>

        {/* Centered navigation links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-white bg-blue-700 px-4 py-2 rounded-lg'
                : 'text-white hover:bg-blue-700 px-4 py-2 rounded-lg'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              isActive
                ? 'text-white bg-blue-700 px-4 py-2 rounded-lg'
                : 'text-white hover:bg-blue-700 px-4 py-2 rounded-lg'
            }
          >
            Chat
          </NavLink>
          <NavLink
            to="/feed"
            className={({ isActive }) =>
              isActive
                ? 'text-white bg-blue-700 px-4 py-2 rounded-lg'
                : 'text-white hover:bg-blue-700 px-4 py-2 rounded-lg'
            }
          >
            Feed
          </NavLink>
          <NavLink
            to="/live-consultation"
            className={({ isActive }) =>
              isActive
                ? 'text-white bg-blue-700 px-4 py-2 rounded-lg'
                : 'text-white hover:bg-blue-700 px-4 py-2 rounded-lg'
            }
          >
            Live Consultation
          </NavLink>
        </div>

        {/* Login and Signup buttons on the right */}
        <div className="flex space-x-4">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? 'text-white bg-blue-700 px-4 py-2 rounded-lg'
                : 'text-white hover:bg-blue-700 px-4 py-2 rounded-lg'
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? 'text-white bg-blue-700 px-4 py-2 rounded-lg'
                : 'text-white hover:bg-blue-700 px-4 py-2 rounded-lg'
            }
          >
            Signup
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;