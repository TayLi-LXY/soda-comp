import { forwardIndexMain } from '@/src/logic/forwards';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowCodeOnClickReturnParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickReturnResults {
}

/**
 * 点击返回
 * FLOW_NODE_ON_CLICK_RETURN
 * 唯一id: Payment/FLOW_CODE_ON_CLICK_RETURN
 */
export const flowCodeOnClickReturn = async (params: FlowCodeOnClickReturnParams): Promise<FlowCodeOnClickReturnResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;

  // 功能：点击返回按钮，跳转到主页
  forwardIndexMain();

  // 结束流程
  return {}
};
