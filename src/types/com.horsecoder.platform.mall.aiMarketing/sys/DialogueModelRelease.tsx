
/**
 * 对话模型发布
 */
export type DialogueModelRelease = {

  /**
   * 对话模型发布ID
   */
  readonly id: string;

  /**
   * 预览地址
   */
  previewUrl?: string;

  /**
   * 状态
   */
  status: string;

  /**
   * 对话模型ID
   */
  dialogueModelId: string;

  /**
   * 发布时间
   */
  releaseTime?: number;

  /**
   * 分享地址
   */
  shareUrl?: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
