import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { store } from 'store/store';
import { Provider } from 'react-redux';

const browserRouter = createBrowserRouter(routes);

export function Router() {
  return (
    <Provider store={store}>
      <RouterProvider router={browserRouter} />
    </Provider>
  );
}
