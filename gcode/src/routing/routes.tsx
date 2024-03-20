import React, { lazy, Suspense } from 'react';
import { Navigate, RouteObject, useLocation } from 'react-router-dom';
import { gcrmRoutingPrefix, ghrRoutingPrefix } from './constants';
import Landing from '../components/Landing';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import CommonLayout from '../components/CommonLayout';
import Header from '../components/Header';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const path = localStorage.getItem('companyName');
const GcrmLazy = lazy(() => import('../components/Gcrm'));
const GhrLazy = lazy(() => import('../components/Ghr'));

const RequireAuth = ({ element }: { element: React.ReactNode }) => {
  const location = useLocation();
  const accessToken = Cookies.get('accessToken');
  console.log('accessToken', accessToken);

  if (accessToken === undefined) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // const decoded = jwtDecode(accessToken !== undefined ? accessToken : '');
  // console.log(decoded);

  return accessToken ? (
    element
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/:companyName/login',
    element: <Login />,
  },
  {
    path: '/:companyName/dashboard',
    element: (
      <RequireAuth
        element={
          <CommonLayout>
            <Dashboard />
          </CommonLayout>
        }
      />
    ),
  },
  {
    path: '/:companyName', // Yeni eklenen yol örneği
    element: <Navigate to={`/${path}/login`} />, // Yeni eklenen Navigate bileşeni
  },
  {
    path: `/${path}/${gcrmRoutingPrefix}/*`,
    element: (
      <RequireAuth
        element={
          <Suspense fallback="Loading Gcrm...">
            <Header />
            <GcrmLazy />
          </Suspense>
        }
      />
    ),
  },
  {
    path: `/${path}/${ghrRoutingPrefix}/*`,
    element: (
      <RequireAuth
        element={
          <Suspense fallback="Loading Ghr...">
            <Header />
            <GhrLazy />
          </Suspense>
        }
      />
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];
