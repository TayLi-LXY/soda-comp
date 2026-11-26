import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * registrationMobileVerificationForm 注册手机验证表单
 */
export interface FlowOnClickRegisterParams {
  setter: any;
  dispatch: any;
  registrationMobileVerificationForm: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickRegisterResults {
}

/**
 * 点击注册
 * @com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_CLICK_REGISTER
 */
export const flowOnClickRegister = async (params: FlowOnClickRegisterParams): Promise<FlowOnClickRegisterResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_CLICK_REGISTER', { ...params });
};
