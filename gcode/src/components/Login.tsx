import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLoginMutation, setCredentials } from 'store/store';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

const Login = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login({
        userNameOrEmail: 'onur', // urldeki parametre eklenecek !!!!
        password: '1234',
      });

      if ('data' in res) {
        console.log(res.data.token);
        dispatch(setCredentials(res.data.token));
        localStorage.setItem('companyName', params.companyName);
        Cookies.set('accessToken', res.data.token.accessToken);
        Cookies.set('refreshToken', res.data.token.refreshToken);
        navigate(`/${params.companyName}/dashboard`);
      } else {
        console.error('Error occurred during login:', res.error);
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <>
      <div>{params.companyName} LOGIN PAGE</div>;
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Kullanıcı Adı" />
        <input type="password" placeholder="Şifre" />
        <button>Giriş Yap</button>
      </form>
    </>
  );
};

export default Login;
