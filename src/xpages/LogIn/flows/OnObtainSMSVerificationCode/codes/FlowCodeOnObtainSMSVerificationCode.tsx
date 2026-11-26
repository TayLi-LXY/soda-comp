import { message } from "antd";

/**
 * 入参明细:
 * verificationCodeLoginForm 验证码登录表单
 */
export interface FlowCodeOnObtainSMSVerificationCodeParams {
  verificationCodeLoginForm: any;
}

/**
 * 出参明细:
 * mobilePhoneNumber 手机号
 * userType 用户类型
 */
export interface FlowCodeOnObtainSMSVerificationCodeResults {
  mobilePhoneNumber: string;
  userType?: number;
}

/**
 * 获取短信验证码
 * FLOW_NODE_ON_OBTAIN_S_M_S_VERIFICATION_CODE
 * 唯一id: LogIn/FLOW_CODE_ON_OBTAIN_S_M_S_VERIFICATION_CODE
 */
export const flowCodeOnObtainSMSVerificationCode = async (params: FlowCodeOnObtainSMSVerificationCodeParams): Promise<FlowCodeOnObtainSMSVerificationCodeResults> => {
  // 初始化流程出参
  let mobilePhoneNumber;
  let userType;
  // 开始流程
  const { verificationCodeLoginForm } = params;

  const values = await verificationCodeLoginForm.validateFields();
  if (!values.mobilePhoneNumber) {
    message.error('手机号不能为空');
    throw new Error('手机号不能为空');
  }
  mobilePhoneNumber = values.mobilePhoneNumber;
  userType = 1;

  // 结束流程
  return {
    mobilePhoneNumber,
    userType,
  }
};
