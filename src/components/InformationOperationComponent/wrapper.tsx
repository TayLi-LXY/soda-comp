'use client';
import React, { useMemo, useState } from 'react';
import type { InformationOperationComponentWrapperProps } from './types';
import { eventsReportButton, eventsFeedbackAndReportDialogue } from './actions';
import type { Setter } from './setter';
import InformationOperationComponentComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 信息操作组件
 */
const InformationOperationComponentWrapper: React.FC<InformationOperationComponentWrapperProps> = () => {
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
  const dispatch = useDispatch();
  // 内部可变数据: 反馈与举报对话框可见控制(feedbackAndReportDialogueVisible)
  const [feedbackAndReportDialogueVisible, setFeedbackAndReportDialogueVisible] = useState<boolean>(false);
  const setter: Setter = useMemo(() => { return { setFeedbackAndReportDialogueVisible };}, []);
  const actions = {
    // 组件reportButton事件响应触发的交互入口
    eventsReportButton: useMemo(() => eventsReportButton(setter, dispatch), [setter, dispatch]),
    // 组件feedbackAndReportDialogue事件响应触发的交互入口
    eventsFeedbackAndReportDialogue: useMemo(() => eventsFeedbackAndReportDialogue(setter, dispatch), [setter, dispatch]),
  };

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
    <InformationOperationComponentComponent 
      feedbackAndReportDialogueVisible={feedbackAndReportDialogueVisible}
      setFeedbackAndReportDialogueVisible={setFeedbackAndReportDialogueVisible}
      actions={actions}
    />
  );
};

export default InformationOperationComponentWrapper;
