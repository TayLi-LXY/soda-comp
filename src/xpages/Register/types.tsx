import type { Actions } from './actions';
import type { FormInstance } from 'antd';


export type RegisterWrapperProps =  {
};

export type RegisterProps = {
  actions: Actions;
  visibleControlInLoginPanel: boolean;
  setVisibleControlInLoginPanel: (visibleControlInLoginPanel: boolean) => void;
  mobileVerificationFormVisibleControl: boolean;
  setMobileVerificationFormVisibleControl: (mobileVerificationFormVisibleControl: boolean) => void;
  registrationMobileVerificationForm: FormInstance<any>;
  graphicalVerificationCode: string | undefined;
  setGraphicalVerificationCode: (graphicalVerificationCode: string | undefined) => void;
  graphicCaptchaRefreshSignal: string | undefined;
  setGraphicCaptchaRefreshSignal: (graphicCaptchaRefreshSignal: string | undefined) => void;
  graphicCaptchaImage: string | undefined;
  setGraphicCaptchaImage: (graphicCaptchaImage: string | undefined) => void;
  countdownData: string;
  setCountdownData: (countdownData: string) => void;
  buttonDisable: boolean;
  setButtonDisable: (buttonDisable: boolean) => void;
  otherLoginMethodsVisibleControl: boolean;
  setOtherLoginMethodsVisibleControl: (otherLoginMethodsVisibleControl: boolean) => void;
};

