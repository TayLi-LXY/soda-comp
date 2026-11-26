import type { FileEntity } from '@/flows/com.horsecoder.im/UpdateIMCallbackInformation/types/FileEntity';

/**
 * IM消息实体
 */
export type IMMessageEntity = {

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
  fileEntity?: FileEntity[];

  /**
   * 会话详情Id
   */
  sessionDetailsId?: string;

}
