import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {
  AdministratorDashboard,
  PropertyManagerDashboard,
  TenantDashboard,
  MaintenanceStaffDashboard,
} from './DashboardComponent';

// Define roles
const ROLES = {
  ADMINISTRATOR: 'administrator',
  PROPERTY_MANAGER: 'property_manager',
  TENANT: 'tenant',
  MAINTENANCE_STAFF: 'maintenance_staff',
};

// Login component
const Login = ({ authenticate, isAuthenticated }) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');

  const handleLogin = () => {
    // Simulate authentication
    console.log("usernameusername", username, password);
    if (username === 'admin' && password === 'admin') {
      console.log("Coming");
      authenticate(ROLES.ADMINISTRATOR);
    } else if (username === 'property_manager' && password === 'property_manager') {
      authenticate(ROLES.PROPERTY_MANAGER);
    } else if (username === 'tenant' && password === 'tenant') {
      authenticate(ROLES.TENANT);
    } else if (username === 'maintenance_staff' && password === 'maintenance_staff') {
      authenticate(ROLES.MAINTENANCE_STAFF);
    } else {
      alert('Invalid credentials');
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('');

  const authenticate = (role) => {
    setIsAuthenticated(true);
    setRole(role);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login authenticate={authenticate} isAuthenticated={isAuthenticated} />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard role={role} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

const Dashboard = ({ role }) => {
  switch (role) {
    case ROLES.ADMINISTRATOR:
      return <AdministratorDashboard />;
    case ROLES.PROPERTY_MANAGER:
      return <PropertyManagerDashboard />;
    case ROLES.TENANT:
      return <TenantDashboard />;
    case ROLES.MAINTENANCE_STAFF:
      return <MaintenanceStaffDashboard />;
    default:
      return null;
  }
};

export default App;
