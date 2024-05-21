import React from 'react';

// Dashboard component for Administrator
const AdministratorDashboard = () => (
  <div>
    <h2>Welcome, Administrator!</h2>
    {/* Add administrator dashboard content */}
    <p>This is the administrator dashboard. You have access to all modules and functionalities.</p>
  </div>
);

// Dashboard component for Property Manager
const PropertyManagerDashboard = () => (
  <div>
    <h2>Welcome, Property Manager!</h2>
    {/* Add property manager dashboard content */}
    <p>This is the property manager dashboard. You have access to manage properties, tenants, leases, and maintenance requests.</p>
  </div>
);

// Dashboard component for Tenant
const TenantDashboard = () => (
  <div>
    <h2>Welcome, Tenant!</h2>
    {/* Add tenant dashboard content */}
    <p>This is the tenant dashboard. You have access to view your lease details, submit maintenance requests, and view financials.</p>
  </div>
);

// Dashboard component for Maintenance Staff
const MaintenanceStaffDashboard = () => (
  <div>
    <h2>Welcome, Maintenance Staff!</h2>
    {/* Add maintenance staff dashboard content */}
    <p>This is the maintenance staff dashboard. You have access to view and update maintenance requests.</p>
  </div>
);

export { AdministratorDashboard, PropertyManagerDashboard, TenantDashboard, MaintenanceStaffDashboard };
