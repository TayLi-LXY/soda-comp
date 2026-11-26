import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * graphicCaptchaRefreshSignal 图形验证码刷新信号
 */
export interface FlowOnRefreshGraphicCaptchaParams {
  setter: any;
  dispatch: any;
  graphicCaptchaRefreshSignal: any;
}

/**
 * 出参明细:
 */
export interface FlowOnRefreshGraphicCaptchaResults {
}

/**
 * 刷新图形验证码
 * @com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_REFRESH_GRAPHIC_CAPTCHA
 */
export const flowOnRefreshGraphicCaptcha = async (params: FlowOnRefreshGraphicCaptchaParams): Promise<FlowOnRefreshGraphicCaptchaResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_REFRESH_GRAPHIC_CAPTCHA', { ...params });
};
