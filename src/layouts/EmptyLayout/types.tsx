import React from 'react';
import type { User } from '@/types/com.horsecoder.identity/sys/User';


export type EmptyLayoutWrapperProps =  {
  children: React.ReactNode;
};

export type EmptyLayoutProps = {
  children: React.ReactNode;
  loggedinUser: User | undefined;
  memberType: string | undefined;
};

