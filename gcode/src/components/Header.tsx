import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const path = localStorage.getItem('companyName');
  return (
    <NavLink className="bg-white w-full" to={`/${path}/dashboard`}>
      Header
    </NavLink>
  );
};

export default Header;
