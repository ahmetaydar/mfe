import React from 'react';
import { Link } from 'react-router-dom';

export function Page2() {
  const path = localStorage.getItem('companyName');

  return (
    <React.Fragment>
      <div>Page 2 from GCRM</div>
      <Link to="/page-1">Go to Page 1</Link>
    </React.Fragment>
  );
}
