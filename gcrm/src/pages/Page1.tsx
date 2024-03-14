import React from 'react';
import { Link } from 'react-router-dom';

export function Page1() {
  return (
    <React.Fragment>
      <div className="  ">Page 1 from GCRM</div>

      <Link to="/page-2">Go to Page 2</Link>
    </React.Fragment>
  );
}
