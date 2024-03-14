import React, { lazy, Suspense } from 'react';
import { Navigate, RouteObject, useParams } from 'react-router-dom';

import { gcrmRoutingPrefix, ghrRoutingPrefix } from './constants';
import Landing from '../components/Landing';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
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
    element: <Dashboard />,
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
];
