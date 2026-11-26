
/**
 * 对话任务文件
 */
export type DialogueTaskFile = {

  /**
   * 对话任务文件ID
   */
  readonly id: string;

  /**
   * 对话任务ID
   */
  dialogueTaskId: string;

  /**
   * 文件Url
   */
  fileUrl: string;

  /**
   * 文件名称
   */
  fileName: string;

  /**
   * 文件类型
   */
  fileType: string;

  /**
   * 文件大小
   */
  fileSize: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
