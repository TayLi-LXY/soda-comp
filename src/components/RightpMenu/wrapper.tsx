'use client';
import React, { useMemo, useState } from 'react';
import type { RightpMenuWrapperProps } from './types';
import { eventsIntelligentAgentSwitchingButton, eventsDataButton } from './actions';
import type { Setter } from './setter';
import RightpMenuComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 右侧顶部菜单
 */
const RightpMenuWrapper: React.FC<RightpMenuWrapperProps> = () => {
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
  // 可见控制数据: 预览可见(previewVisible)
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  // 可见控制数据: 代码可见(codeVisible)
  const [codeVisible, setCodeVisible] = useState<boolean>(false);
  // 可见控制数据: 页面可见(pageVisible)
  const [pageVisible, setPageVisible] = useState<boolean>(false);
  // 可见控制数据: 流程可见(flowVisible)
  const [flowVisible, setFlowVisible] = useState<boolean>(false);
  const setter: Setter = useMemo(() => { return { setPreviewVisible, setCodeVisible, setPageVisible, setFlowVisible };}, []);
  const actions = {
    // 组件intelligentAgentSwitchingButton事件响应触发的交互入口
    eventsIntelligentAgentSwitchingButton: useMemo(() => eventsIntelligentAgentSwitchingButton(setter, dispatch), [setter, dispatch]),
    // 组件dataButton事件响应触发的交互入口
    eventsDataButton: useMemo(() => eventsDataButton(setter, dispatch), [setter, dispatch]),
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
    <RightpMenuComponent 
      previewVisible={previewVisible}
      setPreviewVisible={setPreviewVisible}
      codeVisible={codeVisible}
      setCodeVisible={setCodeVisible}
      pageVisible={pageVisible}
      setPageVisible={setPageVisible}
      flowVisible={flowVisible}
      setFlowVisible={setFlowVisible}
      actions={actions}
    />
  );
};

export default RightpMenuWrapper;
