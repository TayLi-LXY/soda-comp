
/**
 * 对话详情附件
 */
export type DialogueDetailAttachment = {

  /**
   * 对话详情附件ID
   */
  readonly id: string;

  /**
   * 对话详情ID
   */
  dialogueDetailId: string;

  /**
   * 附件类型
   */
  attachmentType: string;

  /**
   * 附件Url
   */
  attachmentUrl: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
