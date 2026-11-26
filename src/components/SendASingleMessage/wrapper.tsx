'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { SendASingleMessageWrapperProps } from './types';
import { onRetrieveMessageContent } from './actions';
import type { Setter } from './setter';
import SendASingleMessageComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 发送信息单项
 */
const SendASingleMessageWrapper: React.FC<SendASingleMessageWrapperProps> = (props) => {
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
  // 内部可变数据: 消息内容(messageContent)
  const [messageContent, setMessageContent] = useState<string>(undefined);
  // 可见控制数据: 智能体昵称可见控制(intelligentAgentNicknameVisibleControl)
  const [intelligentAgentNicknameVisibleControl, setIntelligentAgentNicknameVisibleControl] = useState<boolean>(true);
  // 可见控制数据: 发送已读未读可见控制(sendVisibleControlForReadAndUnread)
  const [sendVisibleControlForReadAndUnread, setSendVisibleControlForReadAndUnread] = useState<boolean>(false);
  // 内部可变数据: 是否打字机(ifTypewriter)
  const [ifTypewriter, setIfTypewriter] = useState<boolean>(false);
  // 可见控制数据: 发送信息操作可见控制(visibleControlOfSendingInformationOperation)
  const [visibleControlOfSendingInformationOperation, setVisibleControlOfSendingInformationOperation] = useState<boolean>(false);
  const setter: Setter = useMemo(() => { return { setMessageContent, setIntelligentAgentNicknameVisibleControl, setSendVisibleControlForReadAndUnread, setIfTypewriter, setVisibleControlOfSendingInformationOperation };}, []);

  // 组件sendASingleMessage数据变化触发的交互入口：获取消息内容
  useEffect(() => onRetrieveMessageContent(setter, dispatch, entity, index), [setter, dispatch, entity, index]);


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
    <SendASingleMessageComponent 
      entity={entity}
      index={index}
      messageContent={messageContent}
      setMessageContent={setMessageContent}
      intelligentAgentNicknameVisibleControl={intelligentAgentNicknameVisibleControl}
      setIntelligentAgentNicknameVisibleControl={setIntelligentAgentNicknameVisibleControl}
      sendVisibleControlForReadAndUnread={sendVisibleControlForReadAndUnread}
      setSendVisibleControlForReadAndUnread={setSendVisibleControlForReadAndUnread}
      ifTypewriter={ifTypewriter}
      setIfTypewriter={setIfTypewriter}
      visibleControlOfSendingInformationOperation={visibleControlOfSendingInformationOperation}
      setVisibleControlOfSendingInformationOperation={setVisibleControlOfSendingInformationOperation}
    />
  );
};

export default SendASingleMessageWrapper;
