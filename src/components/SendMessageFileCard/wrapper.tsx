'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { SendMessageFileCardWrapperProps } from './types';
import { eventsSendMessageFileCard, onInitializeExpandCollapse, onInitializeFileCard } from './actions';
import type { Setter } from './setter';
import SendMessageFileCardComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 发送消息文件卡片
 */
const SendMessageFileCardWrapper: React.FC<SendMessageFileCardWrapperProps> = (props) => {
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
  // 内部数据: 发送消息文件卡片列表单项(entity)
  const { entity } = props;
  // 内部数据: 索引(index)
  const { index } = props;
  // 内部数据: 选中附件回调(selectAttachmentCallback)
  const { selectAttachmentCallback } = props;
  // 内部可变数据: 名称(name)
  const [name, setName] = useState<string | undefined>(undefined);
  // 内部可变数据: 文件大小(byte)
  const [byte, setByte] = useState<string | undefined>(undefined);
  // 内部可变数据: 描述(description)
  const [description, setDescription] = useState<React.ReactNode | ((info: { size: string, icon: React.ReactNode, namePrefix?: string, nameSuffix?: string, name?: string, src?: string, type?: string }) => React.ReactNode)>(undefined);
  // 内部可变数据: 卡片下显示内容(displayContentUnderCard)
  const [displayContentUnderCard, setDisplayContentUnderCard] = useState<string | undefined>('点我展开');
  const setter: Setter = useMemo(() => { return { setName, setByte, setDescription, setDisplayContentUnderCard };}, []);
  const actions = {
    // 组件sendMessageFileCard事件响应触发的交互入口
    eventsSendMessageFileCard: useMemo(() => eventsSendMessageFileCard(setter, dispatch, entity, index, selectAttachmentCallback), [setter, dispatch, entity, index, selectAttachmentCallback]),
  };

  // 组件sendMessageFileCard数据变化触发的交互入口：初始化展开收起
  useEffect(() => onInitializeExpandCollapse(setter, dispatch, entity), [setter, dispatch, entity]);
  // 组件sendMessageFileCard数据变化触发的交互入口：初始化文件卡片
  useEffect(() => onInitializeFileCard(setter, dispatch, entity), [setter, dispatch, entity]);


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
    <SendMessageFileCardComponent 
      entity={entity}
      index={index}
      selectAttachmentCallback={selectAttachmentCallback}
      name={name}
      setName={setName}
      byte={byte}
      setByte={setByte}
      description={description}
      setDescription={setDescription}
      displayContentUnderCard={displayContentUnderCard}
      setDisplayContentUnderCard={setDisplayContentUnderCard}
      actions={actions}
    />
  );
};

export default SendMessageFileCardWrapper;
