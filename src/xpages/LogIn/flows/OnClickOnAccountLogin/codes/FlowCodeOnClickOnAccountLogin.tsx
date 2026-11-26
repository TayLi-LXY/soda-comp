import { message } from "antd";

/**
 * 入参明细:
 * loginForm 登录表单
 * graphicCaptchaText 图形验证码文本
 */
export interface FlowCodeOnClickOnAccountLoginParams {
  loginForm: any;
  graphicCaptchaText: any;
}

/**
 * 出参明细:
 * username 用户名
 * password 密码
 */
export interface FlowCodeOnClickOnAccountLoginResults {
  username: string;
  password: string;
}

/**
 * 点击账号登录
 * FLOW_NODE_ON_CLICK_ON_ACCOUNT_LOGIN
 * 唯一id: LogIn/FLOW_CODE_ON_CLICK_ON_ACCOUNT_LOGIN
 */
export const flowCodeOnClickOnAccountLogin = async (params: FlowCodeOnClickOnAccountLoginParams): Promise<FlowCodeOnClickOnAccountLoginResults> => {
  // 初始化流程出参
  let username;
  let password;
  // 开始流程
  const { loginForm } = params;
  const { graphicCaptchaText } = params;

  const values = await loginForm.validateFields();
  if (graphicCaptchaText !== values.verifyCode) {
    message.error('图形验证码不正确');
    throw new Error('图形验证码不正确');
  }
  if (!values.account || !values.password) {
    message.error('账号或密码不能为空');
    throw new Error('账号或密码不能为空');
  }
  username = values.account;
  password = values.password;

  // 结束流程
  return {
    username,
    password,
  }
};
