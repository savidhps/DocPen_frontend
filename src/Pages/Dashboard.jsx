// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import AddPrescription from '../Components/AddPrescription';
import Home from '../Components/Home';
import PatientDetails from '../Components/PatientDetails';
import AvailableMedicine from '../Components/AvailableMedicine';
import { useNavigate } from 'react-router-dom';

// Sidebar Component
const Sidebar = ({ currentTab, setCurrentTab, collapsed, toggleSidebar }) => {
  const menuItems = [
    { name: 'Home', icon: 'home' },
    { name: 'Patient Details', icon: 'groups' },
    { name: 'Add Prescriptions', icon: 'note_add' },
    { name: 'Available Medicines', icon: 'inventory_2' },
  ];

  return (
    <aside
      className={`bg-white shadow min-h-screen p-6 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'
        }`}
    >
      <div
        className="flex items-center justify-between cursor-pointer mb-6"
        onClick={toggleSidebar}
      >
        <h2 className="text-2xl font-bold text-indigo-700">
          <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>
            {collapsed ? 'menu' : 'dashboard'}
          </span>
        </h2>
      </div>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`cursor-pointer p-2 rounded hover:bg-indigo-100 text-sm flex items-center ${currentTab === item.name ? 'bg-indigo-200 font-semibold' : ''
              } ${collapsed ? 'justify-center' : 'gap-3'}`}
            onClick={() => setCurrentTab(item.name)}
          >
            <span
              className="material-symbols-outlined text-indigo-600"
              style={{ fontSize: '20px' }}
            >
              {item.icon}
            </span>
            {!collapsed && <span>{item.name}</span>}
          </li>
        ))}
      </ul>
    </aside>
  );
};

// Navbar Component
const Navbar = ({ handleLogout }) => (
  <nav className="bg-white shadow px-4 py-4 flex justify-end items-center w-full">
    <div className="flex items-center gap-4">
      <span className="material-symbols-outlined text-gray-600 text-xl">account_circle</span>
      <button
        onClick={handleLogout}
        className="text-blue-600 border border-blue-600 px-2 py-2 rounded hover:bg-blue-600 hover:text-white flex items-center"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>logout</span>
        <span className="ml-1">Logout</span>
      </button>
    </div>
  </nav>
);

// Main Dashboard Component
const Dashboard = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState('Home');
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const renderCurrentTab = () => {
    switch (currentTab) {
      case 'Home':
        return <Home />;
      case 'Patient Details':
        return <PatientDetails />;
      case 'Add Prescriptions':
        return <AddPrescription />;
      case 'Available Medicines':
        return <AvailableMedicine />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        collapsed={collapsed}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex flex-col flex-1">
        <Navbar handleLogout={handleLogout} />
        <main className="flex-1 p-6">
          <div className="bg-white p-6 rounded shadow">{renderCurrentTab()}</div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
