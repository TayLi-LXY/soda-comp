
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeSetCountdownParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetCountdownResults {
}

/**
 * 设置倒计时
 * FLOW_NODE_SET_COUNTDOWN
 * 唯一id: Register/FLOW_CODE_SET_COUNTDOWN
 */
export const flowCodeSetCountdown = async (params: FlowCodeSetCountdownParams): Promise<FlowCodeSetCountdownResults> => {
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
