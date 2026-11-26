import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * graphicCaptchaRefreshSignal 图形验证码刷新信号
 */
export interface FlowOnInitializeGraphicCaptchaParams {
  setter: any;
  dispatch: any;
  graphicCaptchaRefreshSignal: any;
}

/**
 * 出参明细:
 */
export interface FlowOnInitializeGraphicCaptchaResults {
}

/**
 * 初始化图形验证码
 * @com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_INITIALIZE_GRAPHIC_CAPTCHA
 */
export const flowOnInitializeGraphicCaptcha = async (params: FlowOnInitializeGraphicCaptchaParams): Promise<FlowOnInitializeGraphicCaptchaResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_INITIALIZE_GRAPHIC_CAPTCHA', { ...params });
};
