import { onClickOpenPromotionalActivities } from './onClickOpenPromotionalActivities';
import React from 'react';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

export type EventsDiscountActivityButton = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsDiscountActivityButton = (
  setter: Setter,
  dispatch: Dispatch,
  loggedinUser: User | undefined,
  memberType: string | undefined,
): EventsDiscountActivityButton => {
  return {
    onClick: (event) => onClickOpenPromotionalActivities(event, setter, dispatch, loggedinUser, memberType),
  };
};
