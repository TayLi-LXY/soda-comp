import { message } from "antd";


/**
 * 入参明细:
 * registrationMobileVerificationForm 注册手机验证表单
 * graphicalVerificationCode 图形验证码
 */
export interface FlowCodeOnSendMobileVerificationCodeParams {
  registrationMobileVerificationForm: any;
  graphicalVerificationCode: any;
}

/**
 * 出参明细:
 * mobilePhoneNumber 手机号
 * userType 用户类型
 */
export interface FlowCodeOnSendMobileVerificationCodeResults {
  mobilePhoneNumber: string;
  userType?: number;
}

/**
 * 发送手机验证码
 * FLOW_NODE_ON_SEND_MOBILE_VERIFICATION_CODE
 * 唯一id: Register/FLOW_CODE_ON_SEND_MOBILE_VERIFICATION_CODE
 */
export const flowCodeOnSendMobileVerificationCode = async (params: FlowCodeOnSendMobileVerificationCodeParams): Promise<FlowCodeOnSendMobileVerificationCodeResults> => {
  // 初始化流程出参
  let mobilePhoneNumber;
  let userType;
  // 开始流程
  const { registrationMobileVerificationForm } = params;
  const { graphicalVerificationCode } = params;

  if (graphicalVerificationCode !== registrationMobileVerificationForm.getFieldValue('graphicalVerificationCode')) {
    message.error('图形验证码不正确');
    throw new Error('图形验证码不正确');
  }

  mobilePhoneNumber = registrationMobileVerificationForm.getFieldValue('mobilePhoneNumber');
  if (!mobilePhoneNumber) {
    message.error('手机号不能为空');
    throw new Error('手机号不能为空');
  }
  userType = 1;

  // 结束流程
  return {
    mobilePhoneNumber,
    userType,
  }
};
