import React, { ReactElement, useEffect } from 'react';
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../routing/routes';

interface NavigationManagerProps {
  children: ReactElement;
}

export function NavigationManager({ children }: NavigationManagerProps) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function shellNavigationHandler(event: Event) {
      const pathname = (event as CustomEvent<string>).detail;
      if (
        location.pathname === pathname ||
        !matchRoutes(routes, { pathname })
      ) {
        return;
      }
      navigate(pathname);
    }

    window.addEventListener('[gcode] navigated', shellNavigationHandler);

    return () => {
      window.removeEventListener('[gcode] navigated', shellNavigationHandler);
    };
  }, [location]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('[gcrm] navigated', { detail: location.pathname })
    );
  }, [location]);

  return children;
}
