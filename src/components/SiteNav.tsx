import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function SiteNav() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        BRAVEHEARTX
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-8">
        <Link to="/about" className="hover:text-gray-400">ABOUT</Link>
        <Link to="/courses" className="hover:text-gray-400">COURSES</Link>
        <Link to="/results" className="hover:text-gray-400">RESULTS</Link>
        <Link to="/notes" className="hover:text-gray-400">NOTES</Link>
        <Link to="/contact" className="hover:text-gray-400">CONTACT</Link>
      </div>

      {/* Auth */}
      <div className="flex gap-4">
        {user ? (
          <>
            <Link to="/vault" className="hover:text-gray-400">MEMBERS VAULT</Link>
            <button onClick={handleLogout} className="hover:text-gray-400">LOGOUT</button>
          </>
        ) : (
          <Link to="/login" className="hover:text-gray-400">MEMBERS VAULT</Link>
        )}
      </div>
    </nav>
  );
}