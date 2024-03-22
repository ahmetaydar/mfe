import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createRouter } from './routing/router-factory';
import { RoutingStrategy } from './routing/types';
import './index.css';
import { store as mainStore } from 'store/store';
import { Provider as MainStoreProvider } from 'react-redux';
import { store as gcrmStore } from './store';
import { Provider as GcrmStoreProvider } from 'react-redux';

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
    <GcrmStoreProvider store={gcrmStore}>
      {/* <MainStoreProvider store={mainStore}> */}
      <RouterProvider router={router} />
      {/* </MainStoreProvider> */}
    </GcrmStoreProvider>
  );

  return () => queueMicrotask(() => root.unmount());
};

export { mount };
