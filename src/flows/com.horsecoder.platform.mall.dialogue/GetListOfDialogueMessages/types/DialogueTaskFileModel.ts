
/**
 * 对话任务文件模型
 */
export type DialogueTaskFileModel = {

  /**
   * 对话任务文件ID
   */
  id?: string;

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
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

}
