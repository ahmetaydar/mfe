import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { gcrmRoutingPrefix, ghrRoutingPrefix } from '../routing/constants';

export function Layout() {
  return (
    <>
      <nav style={{ marginBottom: '3rem' }}>
        <Link
          to={`/${gcrmRoutingPrefix}/page-1`}
          style={{ marginRight: '1rem' }}
        >
          GCRM Page 1
        </Link>
        <Link
          to={`/${ghrRoutingPrefix}/page-1`}
          style={{ marginRight: '1rem' }}
        >
          GHR page 1
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
