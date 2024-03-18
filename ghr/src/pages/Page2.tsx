import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'store/store';

export function Page2() {
  const path = localStorage.getItem('companyName');
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  const goToDashboardPage = () => {
    window.location.href = `/${path}`;
  };

  return (
    <React.Fragment>
      <div>Page 2 from GHR</div>
      <Link to="/page-1">Go to Page 1</Link>

      <button onClick={goToDashboardPage}>ansayfaya git</button>
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
