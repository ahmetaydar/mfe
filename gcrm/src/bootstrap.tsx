import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createRouter } from './routing/router-factory';
import { RoutingStrategy } from './routing/types';
import './index.css';
import { store } from 'store/store';
import { Provider } from 'react-redux';

const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy,
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
}) => {
  const router = createRouter({ strategy: routingStrategy, initialPathname });
  const root = createRoot(mountPoint);
  root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );

  return () => queueMicrotask(() => root.unmount());
};

export { mount };
