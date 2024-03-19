import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

// CommonLayout bileşeni
const CommonLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-row w-full  ">
      <div className="w-1/6">
        <div>Ben sidebar ım GCRM</div>
        <Link to="/page-1">Müşteriler</Link>
      </div>
      <div className="w-5/6 bg-blue-300">{children}</div>
    </div>
  );
};

export default CommonLayout;
