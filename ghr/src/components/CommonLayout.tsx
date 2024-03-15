import React, { ReactNode } from 'react';

// CommonLayout bileşeni
const CommonLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-row w-full ">
      <div className="w-1/6">
        <div>Ben sidebar ım GHR</div>
      </div>
      <div className="w-5/6 bg-blue-300 h-screen">{children}</div>
    </div>
  );
};

export default CommonLayout;
