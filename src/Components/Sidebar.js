import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="col-md-2 sidebar-bg sidebar">
      <ul>
        <li>
          <NavLink to='/dashboard'>
            <i className="fas fa-tachometer-alt me-3"></i> <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/post'>
            <i className="fas fa-ad me-3"></i> <span>Manage Ads</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/productList'>
            <i className="fas fa-newspaper me-3"></i> <span>Manage Articles</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/addProduct'>
            <i className="fas fa-file-alt me-3"></i> <span>Public Article</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <i className="fas fa-sign-out-alt me-3"></i> <span>Logout</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">
            <i className="fas fa-cogs me-3"></i> <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
