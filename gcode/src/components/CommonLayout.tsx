import Cookies from 'js-cookie';
import React, { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';

// CommonLayout bileşeni
const CommonLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/');
  };
  return (
    <div className="flex flex-col w-full  ">
      <Header />
      <div className="w-full bg-blue-300 ">{children}</div>
    </div>
  );
};

export default CommonLayout;
