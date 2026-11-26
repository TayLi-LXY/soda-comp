import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

import { setView } from '@/src/components/ModelCanvas/handler/diagramHandler';


/**
 * 监听对话数据结构变化
 * 唯一id: panel-onMonitorChangesInDialogueDataStructure
 */
export const onMonitorChangesInDialogueDataStructure = (
  setter: Setter,
  dispatch: Dispatch,
  diagramRef: any,
  previewUrlOfSelectedSchema: string | undefined,
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

  if (previewUrlOfSelectedSchema) {
    setter.setCanvasVisible(false);
    setter.setTableVisualizationVisible(true);  
  } else {
    setter.setCanvasVisible(true);
    setter.setTableVisualizationVisible(false);  
  }


  /*
   * [END OF YOUR CODE]
   */
};
