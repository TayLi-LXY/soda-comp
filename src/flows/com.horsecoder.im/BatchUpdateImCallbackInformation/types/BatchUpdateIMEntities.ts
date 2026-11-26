import type { BatchUpdateCallbackEntities } from '@/flows/com.horsecoder.im/BatchUpdateImCallbackInformation/types/BatchUpdateCallbackEntities';

/**
 * 批量更新im实体
 */
export type BatchUpdateIMEntities = {

  /**
   * IM消息ID
   */
  id?: string;

  /**
   * 消息类型
   */
  type: number;

  /**
   * 通道类型
   */
  channelType: string;

  /**
   * 状态
   */
  status: number;

  /**
   * 消息内容
   */
  content?: string;

  /**
   * 协议类型
   */
  protocolType?: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

  /**
   * 会话Id
   */
  sessionId?: string;

  /**
   * 文件实体
   */
  fileEntity?: BatchUpdateCallbackEntities[];

}
