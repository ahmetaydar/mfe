import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const path = localStorage.getItem('companyName');

  const goToLoginPage = () => {
    if (path !== null) {
      navigate(`${path}/login`);
    }
  };

  return (
    <>
      <div className="font-semibold">Hoşgeldiniz </div>

      <button
        className="bg-green-400 text-white border rounded-md"
        onClick={goToLoginPage}
      >
        Giriş Yap
      </button>
    </>
  );
};

export default Landing;
