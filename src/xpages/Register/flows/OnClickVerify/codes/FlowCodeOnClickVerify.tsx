import { message } from "antd";

/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeOnClickVerifyParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickVerifyResults {
}

/**
 * 点击验证
 * FLOW_NODE_ON_CLICK_VERIFY
 * 唯一id: Register/FLOW_CODE_ON_CLICK_VERIFY
 */
export const flowCodeOnClickVerify = async (params: FlowCodeOnClickVerifyParams): Promise<FlowCodeOnClickVerifyResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;

  // 显示加载动画
  const loadingMsg = message.loading('加载中...', 0);

  // 模拟加载延迟（可删除或调整时长）
  await new Promise(resolve => setTimeout(resolve, 500));

  message.success('验证成功');

  setter.setMobileVerificationFormVisibleControl(false);

  setter.setAccountSettingsFormVisibleControl(true);

  setter.setCreateAccountStepsBarItems([{"title":"手机验证","subTitle":"","status":"finish"},{"title":"账户设置","subTitle":"","status":"process"}]);

  // 关闭加载动画
  loadingMsg();

  // 结束流程
  return {}
};
