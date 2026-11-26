import message from "antd/lib/message";

/**
 * 入参明细:
 * registrationMobileVerificationForm 注册手机验证表单
 */
export interface FlowCodeVerifyFormAndObtainPhoneNumberParams {
  registrationMobileVerificationForm: any;
}

/**
 * 出参明细:
 * mobilePhoneNumber 手机号
 * userType 用户类型
 * usage 用途
 */
export interface FlowCodeVerifyFormAndObtainPhoneNumberResults {
  mobilePhoneNumber: string;
  userType?: number;
  usage: string;
}

/**
 * 校验表单并且获取手机号
 * FLOW_NODE_VERIFY_FORM_AND_OBTAIN_PHONE_NUMBER
 * 唯一id: Scaned/FLOW_CODE_VERIFY_FORM_AND_OBTAIN_PHONE_NUMBER
 */
export const flowCodeVerifyFormAndObtainPhoneNumber = async (params: FlowCodeVerifyFormAndObtainPhoneNumberParams): Promise<FlowCodeVerifyFormAndObtainPhoneNumberResults> => {
  // 初始化流程出参
  let mobilePhoneNumber;
  let userType;
  let usage;
  // 开始流程
  const { registrationMobileVerificationForm } = params;

  mobilePhoneNumber = registrationMobileVerificationForm.getFieldValue("mobilePhoneNumber");
  if (!mobilePhoneNumber) {
    message.error("手机号不能为空");
    throw new Error("手机号不能为空");
  }
  userType = 1;
  usage = 'bindMobilePhoneNumber';

  // 结束流程
  return {
    mobilePhoneNumber,
    userType,
    usage,
  }
};
