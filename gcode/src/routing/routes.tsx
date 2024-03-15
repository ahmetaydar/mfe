import React, { lazy, Suspense } from 'react';
import { Navigate, RouteObject, useParams } from 'react-router-dom';

import { gcrmRoutingPrefix, ghrRoutingPrefix } from './constants';
import Landing from '../components/Landing';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import CommonLayout from '../components/CommonLayout';
const path = localStorage.getItem('companyName');

const GcrmLazy = lazy(() => import('../components/Gcrm'));
const GhrLazy = lazy(() => import('../components/Ghr'));

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
      <CommonLayout>
        <Dashboard />
      </CommonLayout>
    ),
  },
  {
    path: '/:companyName', // Yeni eklenen yol örneği
    element: <Navigate to={`/${path}/dashboard`} />, // Yeni eklenen Navigate bileşeni
  },
  {
    path: `/${path}/${gcrmRoutingPrefix}/*`,
    element: (
      <Suspense fallback="Loading Gcrm...">
        <GcrmLazy />
      </Suspense>
    ),
  },
  {
    path: `/${path}/${ghrRoutingPrefix}/*`,
    element: (
      <Suspense fallback="Loading Ghr...">
        <GhrLazy />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];
