import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickVerifyParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickVerifyResults {
}

/**
 * 点击验证
 * @com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_CLICK_VERIFY
 */
export const flowOnClickVerify = async (params: FlowOnClickVerifyParams): Promise<FlowOnClickVerifyResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_CLICK_VERIFY', { ...params });
};
