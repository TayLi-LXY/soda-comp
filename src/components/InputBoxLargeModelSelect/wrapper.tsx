'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { InputBoxLargeModelSelectWrapperProps } from './types';
import { eventsInputBoxLargeModelSelectComponent, onInitializeInputBoxLargeModelSelectComponent } from './actions';
import type { DefaultOptionType } from 'rc-select/lib/Select';
import type { Setter } from './setter';
import InputBoxLargeModelSelectComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 输入框大模型选择
 */
const InputBoxLargeModelSelectWrapper: React.FC<InputBoxLargeModelSelectWrapperProps> = (props) => {
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
  // 内部数据: 大模型选择回调(largeModelSelectCallback)
  const { largeModelSelectCallback } = props;
  // 内部可变数据: 输入框大模型选择组件选项(inputBoxLargeModelSelectComponentOptions)
  const [inputBoxLargeModelSelectComponentOptions, setInputBoxLargeModelSelectComponentOptions] = useState<DefaultOptionType[]>([{"label":"QWen3.7-Max","value":"QWen3.7-Max"},{"label":"GPT5.5","value":"GPT5.5"},{"label":"Opus4.6","value":"Opus4.6"}]);
  const setter: Setter = useMemo(() => { return { setInputBoxLargeModelSelectComponentOptions };}, []);
  const actions = {
    // 组件inputBoxLargeModelSelectComponent事件响应触发的交互入口
    eventsInputBoxLargeModelSelectComponent: useMemo(() => eventsInputBoxLargeModelSelectComponent(setter, dispatch, largeModelSelectCallback), [setter, dispatch, largeModelSelectCallback]),
  };

  // 组件inputBoxLargeModelSelectComponent数据变化触发的交互入口：初始化输入框大模型选择组件
  useEffect(() => onInitializeInputBoxLargeModelSelectComponent(setter, dispatch), [setter, dispatch]);


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
    <InputBoxLargeModelSelectComponent 
      largeModelSelectCallback={largeModelSelectCallback}
      inputBoxLargeModelSelectComponentOptions={inputBoxLargeModelSelectComponentOptions}
      setInputBoxLargeModelSelectComponentOptions={setInputBoxLargeModelSelectComponentOptions}
      actions={actions}
    />
  );
};

export default InputBoxLargeModelSelectWrapper;
