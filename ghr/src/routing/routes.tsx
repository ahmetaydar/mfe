import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationManager } from '../components/NavigationManager';
import { Page1 } from '../pages/Page1';
import { Page2 } from '../pages/Page2';
import CommonLayout from '../components/CommonLayout';

export const routes = [
  {
    path: '/',
    element: (
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    ),
    children: [
      {
        index: true,
        element: (
          <CommonLayout>
            <Page1 />
          </CommonLayout>
        ),
      },
      {
        path: 'page-1',
        element: (
          <CommonLayout>
            <Page1 />
          </CommonLayout>
        ),
      },
      {
        path: 'page-2',
        element: (
          <CommonLayout>
            <Page2 />
          </CommonLayout>
        ),
      },
    ],
  },
];
