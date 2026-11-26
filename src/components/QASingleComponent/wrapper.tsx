'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { QASingleComponentWrapperProps } from './types';
import { onVisibleControlForSendingOrReplyingChatMessages } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import type { PageState, LayoutState } from '@/models/connect';
import type { Setter } from './setter';
import QASingleComponentComponent from './index';


/**
 * 组件逻辑: 问答单项组件
 */
const QASingleComponentWrapper: React.FC<QASingleComponentWrapperProps> = (props) => {
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
  // 内部数据: 聊天记录列表控制单项(entity)
  const { entity } = props;
  // 内部数据: 索引(index)
  const { index } = props;
  // 内部数据: 发送人昵称字典(senderNicknameDictionary)
  const senderNicknameDictionary = useSelector((state: PageState) => state.Main.page.senderNicknameDictionary);
  // 内部数据: 用户分身ID(userCloneId)
  const userCloneId = useSelector((state: LayoutState) => state.EmptyLayout.layout.userCloneId);
  // 可见控制数据: 聊天回复可见控制(chatReplyVisibleControl)
  const [chatReplyVisibleControl, setChatReplyVisibleControl] = useState<boolean>(false);
  // 可见控制数据: 发送信息可见控制(visibleControlOfSendingInformation)
  const [visibleControlOfSendingInformation, setVisibleControlOfSendingInformation] = useState<boolean>(false);
  const setter: Setter = useMemo(() => { return { setChatReplyVisibleControl, setVisibleControlOfSendingInformation };}, []);

  // 组件qASingleComponent数据变化触发的交互入口：聊天消息发送或回复可见控制
  useEffect(() => onVisibleControlForSendingOrReplyingChatMessages(setter, dispatch, entity, index, userCloneId), [setter, dispatch, entity, index, userCloneId]);


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
    <QASingleComponentComponent 
      entity={entity}
      index={index}
      senderNicknameDictionary={senderNicknameDictionary}
      userCloneId={userCloneId}
      chatReplyVisibleControl={chatReplyVisibleControl}
      setChatReplyVisibleControl={setChatReplyVisibleControl}
      visibleControlOfSendingInformation={visibleControlOfSendingInformation}
      setVisibleControlOfSendingInformation={setVisibleControlOfSendingInformation}
    />
  );
};

export default QASingleComponentWrapper;
