
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeSetVerificationCodeButtonCountdownAndClickableParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetVerificationCodeButtonCountdownAndClickableResults {
}

/**
 * 设置验证码按钮倒计时和可点击
 * FLOW_NODE_SET_VERIFICATION_CODE_BUTTON_COUNTDOWN_AND_CLICKABLE
 * 唯一id: LogIn/FLOW_CODE_SET_VERIFICATION_CODE_BUTTON_COUNTDOWN_AND_CLICKABLE
 */
export const flowCodeSetVerificationCodeButtonCountdownAndClickable = async (params: FlowCodeSetVerificationCodeButtonCountdownAndClickableParams): Promise<FlowCodeSetVerificationCodeButtonCountdownAndClickableResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;

  // 1. 定义倒计时时长
  let countdown = 60;

  // 2. 设置按钮不可点击 + 修改文字
  setter.setButtonDisable(true);
  setter.setCountdownData(`${countdown}s后重新获取`);

  // 3. 开启定时器
  const timer = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      setter.setCountdownData(`${countdown}s后重新获取`);
    } else {
      // 倒计时结束，清除定时器，恢复按钮
      clearInterval(timer);
      setter.setCountdownData('获取验证码');
      setter.setButtonDisable(false);
    }
  }, 1000);  

  // 结束流程
  return {}
};
