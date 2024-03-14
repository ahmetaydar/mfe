import React, { useEffect, useRef } from 'react';
import { mount } from 'ghr/GhrIndex';
import { ghrRoutingPrefix } from '../routing/constants';
import { useLocation, useNavigate } from 'react-router-dom';

const GhrBasename = `/${ghrRoutingPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside Ghr mfe.
  useEffect(() => {
    const GhrNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${GhrBasename}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener('[ghr] navigated', GhrNavigationEventHandler);

    return () => {
      window.removeEventListener('[ghr] navigated', GhrNavigationEventHandler);
    };
  }, [location]);

  // Listen for shell location changes and dispatch a notification.
  useEffect(() => {
    if (location.pathname.startsWith(GhrBasename)) {
      window.dispatchEvent(
        new CustomEvent('[shell] navigated', {
          detail: location.pathname.replace(GhrBasename, ''),
        })
      );
    }
  }, [location]);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});
  // Mount app1 MFE
  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    unmountRef.current = mount({
      mountPoint: wrapperRef.current!,
      initialPathname: location.pathname.replace(GhrBasename, ''),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="Ghr-mfe" />;
};
