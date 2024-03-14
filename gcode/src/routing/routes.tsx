import React, { lazy, Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { gcrmRoutingPrefix, ghrRoutingPrefix } from './constants';

const GcrmLazy = lazy(() => import('../components/Gcrm'));
const GhrLazy = lazy(() => import('../components/Ghr'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={`/${gcrmRoutingPrefix}`} />,
      },
      {
        path: `/${gcrmRoutingPrefix}/*`,
        element: (
          <Suspense fallback="Loading Gcrm...">
            <GcrmLazy />
          </Suspense>
        ),
      },
      {
        path: `/${ghrRoutingPrefix}/*`,
        element: (
          <Suspense fallback="Loading Ghr...">
            <GhrLazy />
          </Suspense>
        ),
      },
    ],
  },
];
