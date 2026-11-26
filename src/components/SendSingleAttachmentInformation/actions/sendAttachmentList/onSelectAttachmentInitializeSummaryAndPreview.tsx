import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 选中附件初始化摘要和预览
 * 唯一id: sendSingleAttachmentInformation-onSelectAttachmentInitializeSummaryAndPreview
 */
export const onSelectAttachmentInitializeSummaryAndPreview = (
  entity: any,
  index: number,
  setter: Setter,
  dispatch: Dispatch,
  sendMessageFileCardList: any[],
): void => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  /*
   * end
   */
  /*
   * 自定义代码区域
   * [YOUR CODE HERE]
   */

  setter.setFile(entity);
  sendMessageFileCardList = sendMessageFileCardList.map((s, idx) => { return {
      ...s,
      ifSelected: idx === index && !s.ifSelected,
  }});
  const ifAtLeastOneSelected = sendMessageFileCardList.find(s => s.ifSelected);
  setter.setSendMessageFileCardList(sendMessageFileCardList);
  setter.setUploadFileSummaryVisibleControl(ifAtLeastOneSelected);

  /*
   * [END OF YOUR CODE]
   */
};
