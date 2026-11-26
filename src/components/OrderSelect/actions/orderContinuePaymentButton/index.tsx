import { onClickContinuePaymentForUnfinishedOrders } from './onClickContinuePaymentForUnfinishedOrders';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

export type EventsOrderContinuePaymentButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsOrderContinuePaymentButton = (
  setter: Setter,
  dispatch: Dispatch,
  paymentOrderNumber: string | undefined,
  memberType: string | undefined,
  loggedinUser: User | undefined,
): EventsOrderContinuePaymentButton => {
  return {
    onClick: (event) => onClickContinuePaymentForUnfinishedOrders(event, setter, dispatch, paymentOrderNumber, memberType, loggedinUser),
  };
};
