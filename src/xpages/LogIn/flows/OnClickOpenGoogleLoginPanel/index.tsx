import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickOpenGoogleLoginPanelParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickOpenGoogleLoginPanelResults {
}

/**
 * 点击打开google登录面板
 * @com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_OPEN_GOOGLE_LOGIN_PANEL
 */
export const flowOnClickOpenGoogleLoginPanel = async (params: FlowOnClickOpenGoogleLoginPanelParams): Promise<FlowOnClickOpenGoogleLoginPanelResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_OPEN_GOOGLE_LOGIN_PANEL', { ...params });
};
