'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { IntelligentAgentSelectComponentWrapperProps } from './types';
import { onInitializeIntelligentAgentList } from './actions';
import type { Setter } from './setter';
import IntelligentAgentSelectComponentComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 智能体选择组件
 */
const IntelligentAgentSelectComponentWrapper: React.FC<IntelligentAgentSelectComponentWrapperProps> = () => {
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
  // 列表控制数据: 候选智能体列表数据(candidateAgentListData)
  const [candidateAgentListData, setCandidateAgentListData] = useState<any[]>([]);
  const setter: Setter = useMemo(() => { return { setCandidateAgentListData };}, []);

  // 组件intelligentAgentConfirmationPanel数据变化触发的交互入口：初始化智能体列表
  useEffect(() => onInitializeIntelligentAgentList(setter, dispatch), [setter, dispatch]);


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
    <IntelligentAgentSelectComponentComponent 
      candidateAgentListData={candidateAgentListData}
      setCandidateAgentListData={setCandidateAgentListData}
    />
  );
};

export default IntelligentAgentSelectComponentWrapper;
