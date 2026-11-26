
/**
 * 入参明细:
 * setter 页面设置器
 * groupChatSettingsDrawerVisible 群聊设置抽屉可见控制
 */
export interface FlowCodeSetGroupChatSettingsDrawerVisibleParams {
  setter: any;
  groupChatSettingsDrawerVisible: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetGroupChatSettingsDrawerVisibleResults {
}

/**
 * 设置数据:群聊设置抽屉可见控制
 * FLOW_NODE_SET_GROUP_CHAT_SETTINGS_DRAWER_VISIBLE
 * 唯一id: Dialogue/FLOW_CODE_SET_GROUP_CHAT_SETTINGS_DRAWER_VISIBLE
 */
export const flowCodeSetGroupChatSettingsDrawerVisible = async (params: FlowCodeSetGroupChatSettingsDrawerVisibleParams): Promise<FlowCodeSetGroupChatSettingsDrawerVisibleResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { groupChatSettingsDrawerVisible } = params;
  setter.setGroupChatSettingsDrawerVisible(!groupChatSettingsDrawerVisible);
  // 结束流程
  return {}
};
