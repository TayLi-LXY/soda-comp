
/**
 * 消息管理实体
 */
export type MessageManagementEntity = {

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
   * 发送用户ID
   */
  senderId: string;

  /**
   * 接收对象ID
   */
  receiverId: string;

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
   * 文件类型
   */
  fileType?: string;

  /**
   * 文件名称
   */
  fileName?: string;

  /**
   * 消息文件url
   */
  messageFileURL?: string;

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

  /**
   * 会话详情Id
   */
  sessionDetailsId?: string;

}
