'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { QAComponentWrapperProps } from './types';
import { onInitializeComponentBasedOnUserQuestionList } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import type { ComponentState } from '@/models/connect';
import type { Setter } from './setter';
import QAComponentComponent from './index';


/**
 * 组件逻辑: 问答组件
 */
const QAComponentWrapper: React.FC<QAComponentWrapperProps> = (props) => {
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
  // 内部数据: 用户提问列表控制单项(entity)
  const { entity } = props;
  // 内部数据: 索引(index)
  const { index } = props;
  // 内部可变数据: 样式类名(classNames)
  const [classNames, setClassNames] = useState<Record<SemanticDOM, string> | undefined>(undefined);
  // 内部可变数据: 样式 style(styles)
  const [styles, setStyles] = useState<Record<SemanticDOM, CSSProperties> | undefined>(undefined);
  // 内部可变数据: 内容(children)
  const [children, setChildren] = useState<React.ReactNode | undefined>('');
  // 全局数据: 状态文本(title)
  const title = useSelector((state: ComponentState) => state.QAComponent.component.title);
  // 全局数据: 加载中(loading)
  const loading = useSelector((state: ComponentState) => state.QAComponent.component.loading);
  // 内部可变数据: 默认是否展开(defaultExpanded)
  const [defaultExpanded, setDefaultExpanded] = useState<boolean>(true);
  // 内部可变数据: 闪动模式(blink)
  const [blink, setBlink] = useState<boolean>(true);
  // 内部可变数据: 展开事件(onExpand)
  const [onExpand, setOnExpand] = useState<((expand: boolean) => void) | undefined>(undefined);
  // 可见控制数据: 思考过程可见控制(thinkingProcessVisibleControl)
  const [thinkingProcessVisibleControl, setThinkingProcessVisibleControl] = useState<boolean>(false);
  const setter: Setter = useMemo(() => { return { setClassNames, setStyles, setChildren, setDefaultExpanded, setBlink, setOnExpand, setThinkingProcessVisibleControl };}, []);

  // 组件qaComponentContainer数据变化触发的交互入口：根据用户消息列表单项初始化思考组件
  useEffect(() => onInitializeComponentBasedOnUserQuestionList(setter, dispatch, entity), [setter, dispatch, entity]);


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
    <QAComponentComponent 
      entity={entity}
      index={index}
      classNames={classNames}
      setClassNames={setClassNames}
      styles={styles}
      setStyles={setStyles}
      children={children}
      setChildren={setChildren}
      title={title}
      loading={loading}
      defaultExpanded={defaultExpanded}
      setDefaultExpanded={setDefaultExpanded}
      blink={blink}
      setBlink={setBlink}
      onExpand={onExpand}
      setOnExpand={setOnExpand}
      thinkingProcessVisibleControl={thinkingProcessVisibleControl}
      setThinkingProcessVisibleControl={setThinkingProcessVisibleControl}
    />
  );
};

export default QAComponentWrapper;
