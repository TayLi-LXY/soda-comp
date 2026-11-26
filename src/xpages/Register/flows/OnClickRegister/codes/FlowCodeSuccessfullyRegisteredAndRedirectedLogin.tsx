import { forwardLogin } from "@/src/logic/forwards";
import { message } from "antd";

/**
 * 入参明细:
 */
export interface FlowCodeSuccessfullyRegisteredAndRedirectedLoginParams {
}

/**
 * 出参明细:
 */
export interface FlowCodeSuccessfullyRegisteredAndRedirectedLoginResults {
}

/**
 * 注册成功跳转登录
 * FLOW_NODE_SUCCESSFULLY_REGISTERED_AND_REDIRECTED_LOGIN
 * 唯一id: Register/FLOW_CODE_SUCCESSFULLY_REGISTERED_AND_REDIRECTED_LOGIN
 */
export const flowCodeSuccessfullyRegisteredAndRedirectedLogin = async (params: FlowCodeSuccessfullyRegisteredAndRedirectedLoginParams): Promise<FlowCodeSuccessfullyRegisteredAndRedirectedLoginResults> => {
  // 初始化流程出参
  // TODO：开始流程

  message.success('注册成功，请登录');
  forwardLogin();

  // 结束流程
  return {}
};
