'use client';
import React, { useState } from 'react';
import type { IntelligentAgentSingleComponentWrapperProps } from './types';
import IntelligentAgentSingleComponentComponent from './index';


/**
 * 组件逻辑: 智能体单项组件
 */
const IntelligentAgentSingleComponentWrapper: React.FC<IntelligentAgentSingleComponentWrapperProps> = (props) => {
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
  // 内部数据: 创建群聊成员列表单项(entity)
  const { entity } = props;
  // 内部数据: 索引(index)
  const { index } = props;
  // 可见控制数据: 智能体选择可见(intelligentAgentSelectVisible)
  const [intelligentAgentSelectVisible, setIntelligentAgentSelectVisible] = useState<boolean>(false);

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
    <IntelligentAgentSingleComponentComponent 
      entity={entity}
      index={index}
      intelligentAgentSelectVisible={intelligentAgentSelectVisible}
      setIntelligentAgentSelectVisible={setIntelligentAgentSelectVisible}
    />
  );
};

export default IntelligentAgentSingleComponentWrapper;
