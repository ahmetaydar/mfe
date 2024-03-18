import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createRouter } from './routing/router-factory';
import { RoutingStrategy } from './routing/types';
import { StoreProvider } from 'store/store';
import './index.css';

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
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );

  return () => queueMicrotask(() => root.unmount());
};

export { mount };
