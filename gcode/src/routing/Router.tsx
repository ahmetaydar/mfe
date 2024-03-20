import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { Provider } from 'react-redux';
import { store } from 'store/store';

const browserRouter = createBrowserRouter(routes);

export function Router() {
  return (
    <Provider store={store}>
      <RouterProvider router={browserRouter} />
    </Provider>
  );
}
