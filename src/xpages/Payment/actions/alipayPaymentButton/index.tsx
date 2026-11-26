import { onClickAlipayPaymentButton } from './onClickAlipayPaymentButton';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsAlipayPaymentButton = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsAlipayPaymentButton = (
  setter: Setter,
  dispatch: Dispatch,
  orderNumber: string | undefined,
  paymentAccountId: string | undefined,
): EventsAlipayPaymentButton => {
  return {
    onClick: (event) => onClickAlipayPaymentButton(event, setter, dispatch, orderNumber, paymentAccountId),
  };
};
