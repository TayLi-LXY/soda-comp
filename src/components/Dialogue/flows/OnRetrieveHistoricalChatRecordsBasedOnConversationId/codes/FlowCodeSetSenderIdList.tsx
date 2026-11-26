import type { MessageManagementEntity } from '@/flows/com.horsecoder.im/SearchImChatRecordsBasedOnId/types/MessageManagementEntity';

/**
 * 入参明细:
 * messageManagementEntity 消息管理实体
 */
export interface FlowCodeSetSenderIdListParams {
  messageManagementEntity: MessageManagementEntity[];
}

/**
 * 出参明细:
 * senderIdList 发送人id列表
 */
export interface FlowCodeSetSenderIdListResults {
  senderIdList?: [];
}

/**
 * 设置发送人ID列表
 * FLOW_NODE_SET_SENDER_ID_LIST
 * 唯一id: Dialogue/FLOW_CODE_SET_SENDER_ID_LIST
 */
export const flowCodeSetSenderIdList = async (params: FlowCodeSetSenderIdListParams): Promise<FlowCodeSetSenderIdListResults> => {
  // 初始化流程出参
  let senderIdList;
  // 开始流程
  const { messageManagementEntity } = params;

  const senderIdLists = messageManagementEntity && messageManagementEntity.length > 0
    ? Array.from(new Set(messageManagementEntity.map(msg => msg.senderId).filter(Boolean)))
    : [];
//   dispatch(refreshTravelPlanningGroupChatPageSenderIdListState(senderIdLists));
  senderIdList = senderIdLists;

  // 结束流程
  return {
    senderIdList,
  }
};
