import { forwardIndexMain } from "@/src/logic/forwards";

/**
 * 入参明细:
 * ifRegistered 是否注册过
 * setter 页面设置器
 */
export interface FlowCodeIfAlreadyRegisteredJumpDirectlyParams {
  ifRegistered: any;
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeIfAlreadyRegisteredJumpDirectlyResults {
}

/**
 * 如果已注册直接跳转
 * FLOW_NODE_IF_ALREADY_REGISTERED_JUMP_DIRECTLY
 * 唯一id: Scaned/FLOW_CODE_IF_ALREADY_REGISTERED_JUMP_DIRECTLY
 */
export const flowCodeIfAlreadyRegisteredJumpDirectly = async (params: FlowCodeIfAlreadyRegisteredJumpDirectlyParams): Promise<FlowCodeIfAlreadyRegisteredJumpDirectlyResults> => {
  // 初始化流程出参
  // 开始流程
  const { ifRegistered } = params;
  const { setter } = params;

  if (ifRegistered) {
    forwardIndexMain();
  } else {
    setter.setLoading(false);
  }

  // 结束流程
  return {}
};
