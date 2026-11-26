'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { PromptWordsBasedOnQueryResultsWrapperProps } from './types';
import { eventsClickPromptQuestions, onInitializePromptWordSet } from './actions';
import type { Setter } from './setter';
import PromptWordsBasedOnQueryResultsComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 基于查询结果提示词
 */
const PromptWordsBasedOnQueryResultsWrapper: React.FC<PromptWordsBasedOnQueryResultsWrapperProps> = (props) => {
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
  // 内部可变数据: 标题(title)
  const [title, setTitle] = useState<string | undefined>(undefined);
  // 内部数据: 提示词列表(items)
  const { items } = props;
  // 内部可变数据: 单击事件(onItemClick)
  const [onItemClick, setOnItemClick] = useState<(info: { data: PromptProps }) => void>(undefined);
  // 内部可变数据: 自定义样式(styles)
  const [styles, setStyles] = useState<Record<SemanticType, React.CSSProperties> | undefined>(undefined);
  // 内部可变数据: 垂直(vertical)
  const [vertical, setVertical] = useState<boolean>(false);
  // 内部可变数据: 换行(wrap)
  const [wrap, setWrap] = useState<boolean>(true);
  // 内部可变数据: 渐入效果(fadeIn)
  const [fadeIn, setFadeIn] = useState<boolean>(true);
  const setter: Setter = useMemo(() => { return { setTitle, setOnItemClick, setStyles, setVertical, setWrap, setFadeIn };}, []);
  const actions = {
    // 组件clickPromptQuestions事件响应触发的交互入口
    eventsClickPromptQuestions: useMemo(() => eventsClickPromptQuestions(setter, dispatch), [setter, dispatch]),
  };

  // 组件promptWordSetDisplayContainer数据变化触发的交互入口：初始化提示词集
  useEffect(() => onInitializePromptWordSet(setter, dispatch), [setter, dispatch]);


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
    <PromptWordsBasedOnQueryResultsComponent 
      title={title}
      setTitle={setTitle}
      items={items}
      onItemClick={onItemClick}
      setOnItemClick={setOnItemClick}
      styles={styles}
      setStyles={setStyles}
      vertical={vertical}
      setVertical={setVertical}
      wrap={wrap}
      setWrap={setWrap}
      fadeIn={fadeIn}
      setFadeIn={setFadeIn}
      actions={actions}
    />
  );
};

export default PromptWordsBasedOnQueryResultsWrapper;
