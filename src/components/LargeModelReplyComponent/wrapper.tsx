'use client';
import React, { useState } from 'react';
import type { LargeModelReplyComponentWrapperProps } from './types';
import LargeModelReplyComponentComponent from './index';


/**
 * 组件逻辑: 大模型回复组件
 */
const LargeModelReplyComponentWrapper: React.FC<LargeModelReplyComponentWrapperProps> = () => {
  /*
   * 前置代码数据区域
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  // 可见控制数据: 回复文本可见控制(visibleControlOfReplyText)
  const [visibleControlOfReplyText, setVisibleControlOfReplyText] = useState<boolean>(true);
  // 可见控制数据: 方案推荐回复可见控制(recommendedSolutionReplyVisibleControl)
  const [recommendedSolutionReplyVisibleControl, setRecommendedSolutionReplyVisibleControl] = useState<boolean>(true);
  // 列表控制数据: 方案卡片单项列表(listOfIndividualItemsOnPlanCard)
  const [listOfIndividualItemsOnPlanCard, setListOfIndividualItemsOnPlanCard] = useState<any[]>([]);
  // 可见控制数据: 语音条组件可见控制(voiceBarComponentVisibleControl)
  const [voiceBarComponentVisibleControl, setVoiceBarComponentVisibleControl] = useState<boolean>(true);

  /*
   * end
   */

  /*
   * 获取父组件传值
   * 定义当前组件数据
   * 定义静态变量
   * 获取组件redux数据
   * 获取组件挂载模型数据
   * 获取组件挂载流程数据
   * 装配子组件数据
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
  return (
    <LargeModelReplyComponentComponent 
      visibleControlOfReplyText={visibleControlOfReplyText}
      setVisibleControlOfReplyText={setVisibleControlOfReplyText}
      recommendedSolutionReplyVisibleControl={recommendedSolutionReplyVisibleControl}
      setRecommendedSolutionReplyVisibleControl={setRecommendedSolutionReplyVisibleControl}
      listOfIndividualItemsOnPlanCard={listOfIndividualItemsOnPlanCard}
      setListOfIndividualItemsOnPlanCard={setListOfIndividualItemsOnPlanCard}
      voiceBarComponentVisibleControl={voiceBarComponentVisibleControl}
      setVoiceBarComponentVisibleControl={setVoiceBarComponentVisibleControl}
    />
  );
};

export default LargeModelReplyComponentWrapper;
