import type { Actions } from './actions';
import type { FormInstance } from 'antd';


export type LogInWrapperProps =  {
};

export type LogInProps = {
  actions: Actions;
  visibleControlInLoginPanel: boolean;
  setVisibleControlInLoginPanel: (visibleControlInLoginPanel: boolean) => void;
  accountLoginVisibleControl: boolean;
  setAccountLoginVisibleControl: (accountLoginVisibleControl: boolean) => void;
  loginForm: FormInstance<any>;
  graphicCaptchaBaseImage: string | undefined;
  setGraphicCaptchaBaseImage: (graphicCaptchaBaseImage: string | undefined) => void;
  graphicCaptchaText: string | undefined;
  setGraphicCaptchaText: (graphicCaptchaText: string | undefined) => void;
  graphicCaptchaRefreshSignal: string | undefined;
  setGraphicCaptchaRefreshSignal: (graphicCaptchaRefreshSignal: string | undefined) => void;
  verificationCodeLoginVisibleControl: boolean;
  setVerificationCodeLoginVisibleControl: (verificationCodeLoginVisibleControl: boolean) => void;
  verificationCodeLoginForm: FormInstance<any>;
  countdownData: string;
  setCountdownData: (countdownData: string) => void;
  buttonDisable: boolean;
  setButtonDisable: (buttonDisable: boolean) => void;
  weChatLoginPanelVisibleControl: boolean;
  setWeChatLoginPanelVisibleControl: (weChatLoginPanelVisibleControl: boolean) => void;
  googleLoginPanelVisibleControls: boolean;
  setGoogleLoginPanelVisibleControls: (googleLoginPanelVisibleControls: boolean) => void;
};

