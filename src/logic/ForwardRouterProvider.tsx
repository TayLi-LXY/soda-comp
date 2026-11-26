'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { setForwardRouter } from './forwards';

export const ForwardRouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    setForwardRouter(router);

    return () => setForwardRouter(undefined);
  }, [router]);

  return <>{children}</>;
};
