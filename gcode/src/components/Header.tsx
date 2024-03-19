import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const path = localStorage.getItem('companyName');
  return (
    <NavLink
      className="bg-white w-full h-20 flex justify-center items-center text-2xl font-bold border-b-2 border-gray-200 "
      to={`/${path}/dashboard`}
    >
      HEADER
    </NavLink>
  );
};

export default Header;
