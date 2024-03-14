import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const path = localStorage.getItem('companyName');
  return (
    <>
      <div>Hoşgeldiniz </div>

      <button
        className="bg-green-400 text-white border rounded-md"
        onClick={() => navigate(`${path}/login`)}
      >
        Giriş Yap
      </button>
    </>
  );
};

export default Landing;
