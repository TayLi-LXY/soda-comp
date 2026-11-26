import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * registrationMobileVerificationForm 注册手机验证表单
 */
export interface FlowOnBindMobileNumberParams {
  setter: any;
  dispatch: any;
  registrationMobileVerificationForm: any;
}

/**
 * 出参明细:
 */
export interface FlowOnBindMobileNumberResults {
}

/**
 * 绑定手机号
 * @com.horsecoder.platform.mall.umi.chat/scaned/FLOW_ON_BIND_MOBILE_NUMBER
 */
export const flowOnBindMobileNumber = async (params: FlowOnBindMobileNumberParams): Promise<FlowOnBindMobileNumberResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/scaned/FLOW_ON_BIND_MOBILE_NUMBER', { ...params });
};
