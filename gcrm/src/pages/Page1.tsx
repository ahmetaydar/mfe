import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import {
  selectCurrentAccessToken,
  selectCurrentRefreshToken,
} from 'store/store';
import { useGetCompaniesQuery } from '../features/company/companyApiSlice';

export function Page1() {
  const local = localStorage.getItem('companyName');
  const token = useSelector(selectCurrentAccessToken);
  const refreshToken = useSelector(selectCurrentRefreshToken);
  console.log('gcrm token', token);
  console.log('gcrm refreshToken', refreshToken);

  const { data } = useGetCompaniesQuery(undefined);
  console.log(data);

  return (
    <>
      <div className="bg-blue-400 flex justify-center">Page 1 from GCRM</div>
      <h1> local hosttan okunan değer : {local}</h1>
      <Link to="/page-2">Go to Page 2</Link>

      {data && (
        <div>
          {data.map((company: any) => (
            <div key={company.id}>{company.name}</div>
          ))}
        </div>
      )}
    </>
  );
}
