import Cookies from 'js-cookie';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'store/store';

export function Page1() {
  const { count, clear } = useStore();
  return (
    <React.Fragment>
      <div>Page 1 from GHR</div>
      <Link to="/page-2">Go to Page 2</Link>
      <h6>token : {Cookies.get('token')}</h6>
      <br />
      <header className="bg-blue-700 text-white font-bold text-3xl p-5 flex">
        <div className="flex-grow">Awesome Header</div>
        <div>
          {count}

          <button
            onClick={clear}
            className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
          >
            Clear Cart
          </button>
        </div>
      </header>
    </React.Fragment>
  );
}
