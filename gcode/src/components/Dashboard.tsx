import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'store/store';

const Dashboard = () => {
  const navigate = useNavigate();
  const path = localStorage.getItem('companyName');
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  const redirectToGcrm = () => {
    navigate(`/${path}/gcrm`, { replace: true });
  };

  const redirectToGhr = () => {
    navigate(`/${path}/ghr`);
  };
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <h1>Dashboard</h1>
      <div className="flex gap-x-4 w-full mx-auto ">
        <div
          className="bg-green-400 w-40 h-40 flex justify-center items-center text-white cursor-pointer font-bold border-2 rounded-md"
          onClick={redirectToGcrm}
        >
          GCRM
        </div>
        <h6>{Cookies.get('token')}</h6>
        <div
          className="bg-green-400 w-40 h-40 flex justify-center items-center cursor-pointer text-white font-bold border-2 rounded-md"
          onClick={redirectToGhr}
        >
          GHR
        </div>
      </div>
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
    </main>
  );
};

export default Dashboard;
