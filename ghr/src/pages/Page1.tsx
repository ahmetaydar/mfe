import Cookies from 'js-cookie';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectCurrentAccessToken,
  selectCurrentRefreshToken,
} from 'store/store';

export function Page1() {
  const token = useSelector(selectCurrentAccessToken);
  const refreshToken = useSelector(selectCurrentRefreshToken);
  console.log('ghr token', token);
  console.log('ghr refreshToken', refreshToken);
  return (
    <React.Fragment>
      <div>Page 1 from GHR</div>
      <Link to="/page-2">Go to Page 2</Link>
      <h6>token : {Cookies.get('token')}</h6>
      <br />
    </React.Fragment>
  );
}
