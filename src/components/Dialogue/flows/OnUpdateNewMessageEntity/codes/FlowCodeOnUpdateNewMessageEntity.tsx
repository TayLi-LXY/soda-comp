
/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * latestNewsRecordEntity 最新消息记录实体
 * senderNicknameDictionary 发送人昵称字典
 * conversationId 对话ID
 */
export interface FlowCodeOnUpdateNewMessageEntityParams {
  setter: any;
  dispatch: any;
  latestNewsRecordEntity: any;
  senderNicknameDictionary: any;
  conversationId: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnUpdateNewMessageEntityResults {
}

/**
 * 滚动到底部
 */
function scrollToBottom(dom: HTMLElement) {
  dom.scrollTop = dom.scrollHeight;
}

/**
 * 初始化滚动观察器（自动吸附功能）
 */
function initScroll(dom: HTMLElement) {
  // 防止重复初始化
  if ((dom as any).__scrollInitialized) return;
  (dom as any).__scrollInitialized = true;
  let isScrollLocked = true;
  // 监听滚动事件，判断用户是否主动滚动
  dom.addEventListener('scroll', () => {
    const isAtBottom = dom.scrollTop + dom.clientHeight >= dom.scrollHeight - 10;
    if (isAtBottom) {
      isScrollLocked = true;
    } else if (isScrollLocked && dom.scrollTop < dom.scrollHeight - dom.clientHeight - 10) {
      isScrollLocked = false;
    }
  });

  // MutationObserver 监听 DOM 变化
  const observer = new MutationObserver(() => {
    if (isScrollLocked) {
      scrollToBottom(dom);
    }
  });

  observer.observe(dom, {
    childList: true,
    subtree: true,
    characterData: true,
  });
  // 首次立即滚动到底部
  scrollToBottom(dom);
}

/**
 * 更新新消息实体
 * FLOW_NODE_ON_UPDATE_NEW_MESSAGE_ENTITY
 * 唯一id: Dialogue/FLOW_CODE_ON_UPDATE_NEW_MESSAGE_ENTITY
 */
export const flowCodeOnUpdateNewMessageEntity = async (params: FlowCodeOnUpdateNewMessageEntityParams): Promise<FlowCodeOnUpdateNewMessageEntityResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;
  const { latestNewsRecordEntity } = params;
  const { senderNicknameDictionary } = params;
  const { conversationId } = params;

  const dom = document.getElementById('messageSending');
  if (dom) {
    initScroll(dom);
  }
  const nextLatestNewsRecordEntity = Array.isArray(latestNewsRecordEntity)
    ? latestNewsRecordEntity.map((entity: any) => {
      if (!senderNicknameDictionary || !entity.senderId) {
        return entity;
      }

      const senderName = senderNicknameDictionary[entity.senderId];
      return senderName ? { ...entity, senderName } : entity;
    })
    : latestNewsRecordEntity;

  setter.setChatRecordListControl(nextLatestNewsRecordEntity);

  // 结束流程
  return {}
};
