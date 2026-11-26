import { onClickOnWeChatPay } from './onClickOnWeChatPay';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsWeChatPayButton = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsWeChatPayButton = (
  setter: Setter,
  dispatch: Dispatch,
  orderNumber: string | undefined,
  paymentAccountId: string | undefined,
): EventsWeChatPayButton => {
  return {
    onClick: (event) => onClickOnWeChatPay(event, setter, dispatch, orderNumber, paymentAccountId),
  };
};
