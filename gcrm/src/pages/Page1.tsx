import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'store/store';

export function Page1() {
  const local = localStorage.getItem('companyName');
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-blue-400 flex justify-center">Page 1 from GCRM</div>
      <h1> local hosttan okunan değer : {local}</h1>
      <Link to="/page-2">Go to Page 2</Link>
      <h6>gcrm token : {Cookies.get('token')}</h6>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}
