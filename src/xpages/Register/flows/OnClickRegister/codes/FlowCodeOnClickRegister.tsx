import { message } from "antd";

/**
 * 入参明细:
 * registrationMobileVerificationForm 注册手机验证表单
 */
export interface FlowCodeOnClickRegisterParams {
  registrationMobileVerificationForm: any;
}

/**
 * 出参明细:
 * password 密码
 * phone 手机号
 * nickname 昵称
 * email 邮箱
 * userType 用户类型
 * captcha 验证码
 * userName 用户名
 */
export interface FlowCodeOnClickRegisterResults {
  password: string;
  phone: string;
  nickname: string;
  email: string;
  userType?: number;
  captcha: string;
  userName: string;
}

/**
 * 点击注册
 * FLOW_NODE_ON_CLICK_REGISTER
 * 唯一id: Register/FLOW_CODE_ON_CLICK_REGISTER
 */
export const flowCodeOnClickRegister = async (params: FlowCodeOnClickRegisterParams): Promise<FlowCodeOnClickRegisterResults> => {
  // 初始化流程出参
  let password;
  let phone;
  let nickname;
  let email;
  let userType;
  let captcha;
  let userName;
  // 开始流程
  const { registrationMobileVerificationForm } = params;

  const values = await registrationMobileVerificationForm.validateFields();

  password = values.password;
  if (!password) {
    message.error('密码不能为空');
    throw new Error('密码不能为空');
  }
  const confirmPassword = values.confirmPassword;
  if (password !== confirmPassword) {
    message.error('两次输入的密码不一致');
    throw new Error('两次输入的密码不一致');
  }
  phone = values.mobilePhoneNumber;
  if (!phone) {
    message.error('手机号不能为空');
    throw new Error('手机号不能为空');
  }
  if (!values.verifyCode) {
    message.error('验证码不能为空');
    throw new Error('验证码不能为空');
  }
  if (!values.username) {
    message.error('用户名不能为空');
    throw new Error('用户名不能为空');
  }
  nickname = values.username;
  userName = values.username;
  email = "";
  userType = 1;
  captcha = values.verifyCode;

  // 结束流程
  return {
    password,
    phone,
    nickname,
    email,
    userType,
    captcha,
    userName,
  }
};
