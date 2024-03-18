import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useStore } from 'store/store';

export function Page1() {
  const local = localStorage.getItem('companyName');
  const { count, clear } = useStore();
  return (
    <>
      <div className="bg-blue-400 flex justify-center">Page 1 from GCRM</div>
      <h1> local hosttan okunan değer : {local}</h1>
      <Link to="/page-2">Go to Page 2</Link>
      <h6>gcrm token : {Cookies.get('token')}</h6>
      <header className="bg-blue-700 text-white font-bold text-3xl p-5 flex">
        <div className="flex-grow">Awesome Header</div>
        <div>{count}</div>
      </header>
    </>
  );
}
