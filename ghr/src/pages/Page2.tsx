import React from 'react';
import { Link } from 'react-router-dom';

export function Page2() {
  const path = localStorage.getItem('companyName');

  const goToDashboardPage = () => {
    window.location.href = `/${path}/dashboard`;
  };

  return (
    <React.Fragment>
      <div>Page 2 from GHR</div>
      <Link to="/page-1">Go to Page 1</Link>

      <button onClick={goToDashboardPage}>ansayfaya git</button>
    </React.Fragment>
  );
}
