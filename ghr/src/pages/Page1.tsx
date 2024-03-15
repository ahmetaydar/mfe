import Cookies from 'js-cookie';
import React from 'react';
import { Link } from 'react-router-dom';

export function Page1() {
  return (
    <React.Fragment>
      <div>Page 1 from GHR</div>
      <Link to="/page-2">Go to Page 2</Link>
      <h6>token : {Cookies.get('token')}</h6>
    </React.Fragment>
  );
}
