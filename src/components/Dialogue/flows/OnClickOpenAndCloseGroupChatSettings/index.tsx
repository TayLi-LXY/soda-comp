import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * groupChatSettingsDrawerVisible 群聊设置抽屉可见控制
 */
export interface FlowOnClickOpenAndCloseGroupChatSettingsParams {
  setter: any;
  dispatch: any;
  groupChatSettingsDrawerVisible: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickOpenAndCloseGroupChatSettingsResults {
}

/**
 * 点击打开关闭群聊设置抽屉
 * @com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_CLICK_OPEN_AND_CLOSE_GROUP_CHAT_SETTINGS
 */
export const flowOnClickOpenAndCloseGroupChatSettings = async (params: FlowOnClickOpenAndCloseGroupChatSettingsParams): Promise<FlowOnClickOpenAndCloseGroupChatSettingsResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_CLICK_OPEN_AND_CLOSE_GROUP_CHAT_SETTINGS', { ...params });
};
