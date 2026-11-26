import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickChangePhoneNumberParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickChangePhoneNumberResults {
}

/**
 * 点击更换手机号码
 * @com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_CLICK_CHANGE_PHONE_NUMBER
 */
export const flowOnClickChangePhoneNumber = async (params: FlowOnClickChangePhoneNumberParams): Promise<FlowOnClickChangePhoneNumberResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_CLICK_CHANGE_PHONE_NUMBER', { ...params });
};
