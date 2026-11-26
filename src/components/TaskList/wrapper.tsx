'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { TaskListWrapperProps } from './types';
import { onInitializeTask } from './actions';
import type { Setter } from './setter';
import TaskListComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 任务列表
 */
const TaskListWrapper: React.FC<TaskListWrapperProps> = () => {
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
  // 列表控制数据: 智能体执行任务列表数据(intelligentAgentExecutionTaskListData)
  const [intelligentAgentExecutionTaskListData, setIntelligentAgentExecutionTaskListData] = useState<any[]>([]);
  const setter: Setter = useMemo(() => { return { setIntelligentAgentExecutionTaskListData };}, []);

  // 组件taskConfirmationPanel数据变化触发的交互入口：初始化任务
  useEffect(() => onInitializeTask(setter, dispatch), [setter, dispatch]);


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
    <TaskListComponent 
      intelligentAgentExecutionTaskListData={intelligentAgentExecutionTaskListData}
      setIntelligentAgentExecutionTaskListData={setIntelligentAgentExecutionTaskListData}
    />
  );
};

export default TaskListWrapper;
