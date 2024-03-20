import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectCurrentAccessToken,
  selectCurrentRefreshToken,
} from 'store/store';

const Dashboard = () => {
  const navigate = useNavigate();
  const path = localStorage.getItem('companyName');
  const token = useSelector(selectCurrentAccessToken);
  const refreshToken = useSelector(selectCurrentRefreshToken);
  console.log('gcode token', token);
  console.log('gcode refreshToken', refreshToken);
  const redirectToGcrm = () => {
    navigate(`/${path}/gcrm`, { replace: true });
  };

  const redirectToGhr = () => {
    navigate(`/${path}/ghr`);
  };
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <h1>Home Sayfası</h1>
      <div className="flex gap-x-4 w-full mx-auto ">
        <div
          className="bg-green-400 w-40 h-40 flex justify-center items-center text-white cursor-pointer font-bold border-2 rounded-md"
          onClick={redirectToGcrm}
        >
          GCRM
        </div>

        <div
          className="bg-green-400 w-40 h-40 flex justify-center items-center cursor-pointer text-white font-bold border-2 rounded-md"
          onClick={redirectToGhr}
        >
          GHR
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
