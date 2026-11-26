import { onClickCancelPayment } from './onClickCancelPayment';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsCancelPaymentButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsCancelPaymentButton = (
  setter: Setter,
  dispatch: Dispatch,
  orderNumber: string | undefined,
  paymentAccountId: string | undefined,
): EventsCancelPaymentButton => {
  return {
    onClick: (event) => onClickCancelPayment(event, setter, dispatch, orderNumber, paymentAccountId),
  };
};
