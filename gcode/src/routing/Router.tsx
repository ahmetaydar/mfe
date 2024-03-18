import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { StoreProvider } from 'store/store';

const browserRouter = createBrowserRouter(routes);

export function Router() {
  return (
    <StoreProvider>
      <RouterProvider router={browserRouter} />
    </StoreProvider>
  );
}
