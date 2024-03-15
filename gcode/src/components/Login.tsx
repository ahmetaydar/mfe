import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
  const params = useParams();
  const path = localStorage.getItem('companyName');
  const navigate = useNavigate();

  const hanleLogin = () => {
    localStorage.setItem('companyName', params.companyName);
    Cookies.set('token', 'eyJhbGciOiJIUzI1NiIsI');

    navigate(`/${params.companyName}/dashboard`);
  };

  return (
    <>
      <div>GCODE LOGIN PAGE</div>;
      <input type="text" placeholder="Kullanıcı Adı" />
      <input type="password" placeholder="Şifre" />
      <button onClick={() => hanleLogin()}>Giriş Yap</button>
    </>
  );
};

export default Login;
