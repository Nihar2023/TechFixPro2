import React, { useState } from 'react';
import './Dashboard.css';
import cartItems from '../../cart.js'; // Path is fine
import Home from '../../Components/Home.jsx';
import Profile from '../../Components/Profile.jsx';
import dashboard from '../../Components/dashboard.jsx'; // Rename this to avoid conflict

function Dashboard() {
  const [option, setOption] = useState('Home');

  return (
    <div className='dashboard-container'>
      {/* Navbar */}
      <div className='navbar'>
        <h2 className="logo">MyDashboard</h2>
        <div className="nav-buttons">
          <button onClick={() => setOption('Home')}>Home</button>
          <button onClick={() => setOption('Profile')}>Profile</button>
          <button onClick={() => setOption('Dashboard')}>Dashboard</button>
          <button onClick={() => setOption('Help')}>Help</button>
        </div>
      </div>

      {/* Main Layout */}
      <div className='main'>
        {/* Sidebar */}
        <div className='left-side'>
          <img
            src="https://via.placeholder.com/100"
            alt="User"
            className='profile-pic'
          />
          <h3 className="username">Nihar Dukale</h3>
          <nav className='sidebar-nav'>
            <button onClick={() => setOption('Home')}>Home</button>
            <button onClick={() => setOption('Dashboard')}>Dashboard</button>
            <button onClick={() => setOption('Profile')}>Profile</button>
          </nav>
        </div>

        {/* Right Side Content */}
        <div className='right-side'>
          {option === 'Home' && <Home />}
          {option === 'Dashboard' && <DashboardView cartItems={cartItems[0]} />}
          {option === 'Profile' && <Profile />}
          {option === 'Help' && <div><h2>Need Help?</h2><p>Feel free to reach out.</p></div>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
