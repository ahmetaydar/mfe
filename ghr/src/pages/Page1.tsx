import Cookies from 'js-cookie';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'store/store';

export function Page1() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div>Page 1 from GHR</div>
      <Link to="/page-2">Go to Page 2</Link>
      <h6>token : {Cookies.get('token')}</h6>
      <br />
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
    </React.Fragment>
  );
}
