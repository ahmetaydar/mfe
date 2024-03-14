import React from 'react';
import { Link } from 'react-router-dom';

export function Page1() {
  const local = localStorage.getItem('companyName');
  return (
    <>
      <div className="bg-blue-400 flex justify-center">Page 1 from GCRM</div>
      <h1> local hosttan okunan değer : {local}</h1>
      <Link to="/page-2">Go to Page 2</Link>
    </>
  );
}
