import { flowOnInitializeIntelligentAgentList } from '../../flows/OnInitializeIntelligentAgentList';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 初始化智能体列表
 * 唯一id: intelligentAgentSelectComponent-onInitializeIntelligentAgentList
 */
export const onInitializeIntelligentAgentList = (
  setter: Setter,
  dispatch: Dispatch,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnInitializeIntelligentAgentList({ setter, dispatch }).then((result) => {
    // console.log(result);
  }).catch((err) => {
    console.error(err);
  });
  /*
   * end
   */
  /*
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
};
