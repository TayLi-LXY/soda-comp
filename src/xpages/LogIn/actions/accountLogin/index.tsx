import { onClickOnAccountLogin } from './onClickOnAccountLogin';
import type { Dispatch } from 'redux';
import type { FormInstance } from 'antd';
import type { Setter } from '../../setter';

export type EventsAccountLogin = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsAccountLogin = (
  setter: Setter,
  dispatch: Dispatch,
  loginForm: FormInstance<any>,
  graphicCaptchaText: string | undefined,
): EventsAccountLogin => {
  return {
    onClick: (event) => onClickOnAccountLogin(event, setter, dispatch, loginForm, graphicCaptchaText),
  };
};
