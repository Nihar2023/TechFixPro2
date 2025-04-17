// src/components/AdminLayout.js
import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faDashboard, faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons';

const AdminLayout = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-white p-3" style={{ width: '250px', minHeight: '100vh' }}>
        <h3 className="text-center mb-4">TechFixPro</h3>
        <div className="text-center mb-4">
          <div className="bg-secondary rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
            <FontAwesomeIcon icon={faUserCog} size="2x" />
          </div>
          <p className="mt-2 mb-0">{currentUser?.name || 'Admin'}</p>
          <small className="text-muted">Admin</small>
        </div>
        <hr className="my-4" />
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              <FontAwesomeIcon icon={faDashboard} className="me-2" />
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link text-white">
              <FontAwesomeIcon icon={faUsers} className="me-2" />
              User Management
            </Link>
          </li>
        </ul>
        <div className="mt-auto pt-3">
          <button onClick={handleLogout} className="btn btn-outline-light w-100">
            <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;