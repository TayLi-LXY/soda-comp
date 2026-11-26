
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeSetTimerAndButtonStatusParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetTimerAndButtonStatusResults {
}

/**
 * 设置计时器和按钮状态
 * FLOW_NODE_SET_TIMER_AND_BUTTON_STATUS
 * 唯一id: Scaned/FLOW_CODE_SET_TIMER_AND_BUTTON_STATUS
 */
export const flowCodeSetTimerAndButtonStatus = async (params: FlowCodeSetTimerAndButtonStatusParams): Promise<FlowCodeSetTimerAndButtonStatusResults> => {
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
