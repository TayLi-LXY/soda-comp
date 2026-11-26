import message from 'antd/es/message';
import Cookies from 'js-cookie';

/**
 * 入参明细:
 * registrationMobileVerificationForm 注册手机验证表单
 */
export interface FlowCodeGetBindingParametersParams {
  registrationMobileVerificationForm: any;
}

/**
 * 出参明细:
 * phone 手机号
 * captcha 验证码
 * tempToken 临时token
 */
export interface FlowCodeGetBindingParametersResults {
  phone: string;
  captcha: string;
  tempToken: string;
}

/**
 * 获取绑定参数
 * FLOW_NODE_GET_BINDING_PARAMETERS
 * 唯一id: Scaned/FLOW_CODE_GET_BINDING_PARAMETERS
 */
export const flowCodeGetBindingParameters = async (params: FlowCodeGetBindingParametersParams): Promise<FlowCodeGetBindingParametersResults> => {
  // 初始化流程出参
  let phone;
  let captcha;
  let tempToken;
  // 开始流程
  const { registrationMobileVerificationForm } = params;

  const values = await registrationMobileVerificationForm.validateFields();
  phone = values.mobilePhoneNumber;
  captcha = values.verifyCode;
  tempToken = Cookies.get('tempToken');
  if (!tempToken) {
    message.error('微信授权失败');
    throw new Error('临时token不存在');
  }

  // 结束流程
  return {
    phone,
    captcha,
    tempToken,
  }
};
