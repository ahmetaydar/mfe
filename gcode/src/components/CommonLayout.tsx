import Cookies from 'js-cookie';
import React, { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// CommonLayout bileşeni
const CommonLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/');
  };
  return (
    <div className="flex flex-row w-full ">
      <div className="w-1/6">
        <div>ANA SIDEBAR</div>
        <button className="block p-2" onClick={() => handleLogout()}>
          ÇIKIŞ YAP
        </button>
      </div>
      <div className="w-5/6 bg-blue-300 h-screen">{children}</div>
    </div>
  );
};

export default CommonLayout;
