import React, { useEffect, useRef } from 'react';
import { mount } from 'gcrm/GcrmIndex';
import { gcrmRoutingPrefix } from '../routing/constants';
import { useLocation, useNavigate } from 'react-router-dom';

const path = localStorage.getItem('companyName');

const GcrmBasename = `/${path}/${gcrmRoutingPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside Gcrm mfe.
  useEffect(() => {
    const GcrmNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${GcrmBasename}${pathname}`;

      if (newPathname === location.pathname + '/') {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener('[gcrm] navigated', GcrmNavigationEventHandler);

    return () => {
      window.removeEventListener(
        '[gcrm] navigated',
        GcrmNavigationEventHandler
      );
    };
  }, [location]);

  // Listen for shell location changes and dispatch a notification.
  useEffect(() => {
    if (location.pathname.startsWith(GcrmBasename)) {
      window.dispatchEvent(
        new CustomEvent('[gcode] navigated', {
          detail: location.pathname.replace(GcrmBasename, ''),
        })
      );
    }
  }, [location]);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});
  // Mount Gcrm MFE
  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    unmountRef.current = mount({
      mountPoint: wrapperRef.current!,
      initialPathname: location.pathname.replace(GcrmBasename, ''),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="Gcrm-mfe" />;
};
