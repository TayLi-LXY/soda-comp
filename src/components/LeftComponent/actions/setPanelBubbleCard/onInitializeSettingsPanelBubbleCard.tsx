import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';
import SettingsPanelWrapper from '@/src/components/SettingsPanel/wrapper';

/**
 * 初始化设置面板气泡卡片
 * 唯一id: leftComponent-onInitializeSettingsPanelBubbleCard
 */
export const onInitializeSettingsPanelBubbleCard = (
  setter: Setter,
  dispatch: Dispatch,
) => {
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


    setter.setPopoverContent(<SettingsPanelWrapper/>);
  /*
   * [END OF YOUR CODE]
   */
};
