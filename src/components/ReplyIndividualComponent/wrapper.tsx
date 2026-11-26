'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { ReplyIndividualComponentWrapperProps } from './types';
import { eventsReplyBubbleSubContainer, onObtainContentOfReplyMessage } from './actions';
import type { Setter } from './setter';
import ReplyIndividualComponentComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 回复单项组件
 */
const ReplyIndividualComponentWrapper: React.FC<ReplyIndividualComponentWrapperProps> = (props) => {
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
  // 可见控制数据: 角色可见控制(characterVisibilityControl)
  const [characterVisibilityControl, setCharacterVisibilityControl] = useState<boolean>(false);
  // 内部可变数据: 结果刷新信号(resultRefreshSignal)
  const [resultRefreshSignal, setResultRefreshSignal] = useState<string | undefined>(undefined);
  // 内部可变数据: 是否打字机(ifTypewriter)
  const [ifTypewriter, setIfTypewriter] = useState<boolean>(false);
  // 可见控制数据: 查询结果展示可见控制(queryResultsDisplayVisibleControls)
  const [queryResultsDisplayVisibleControls, setQueryResultsDisplayVisibleControls] = useState<boolean>(false);
  // 可见控制数据: 自定义大模型回复可见控制(customLargeModelReplyVisibleControl)
  const [customLargeModelReplyVisibleControl, setCustomLargeModelReplyVisibleControl] = useState<boolean>(false);
  // 可见控制数据: 大模型回复组件可见控制(largeModelReplyComponentVisibleControl)
  const [largeModelReplyComponentVisibleControl, setLargeModelReplyComponentVisibleControl] = useState<boolean>(false);
  // 可见控制数据: 回复已读未读可见控制(replyReadUnreadVisibleControl)
  const [replyReadUnreadVisibleControl, setReplyReadUnreadVisibleControl] = useState<boolean>(false);
  // 可见控制数据: 回复信息操作可见控制(responseMessageOperationVisibleControl)
  const [responseMessageOperationVisibleControl, setResponseMessageOperationVisibleControl] = useState<boolean>(false);
  const setter: Setter = useMemo(() => { return { setMessageContent, setIntelligentAgentNicknameVisibleControl, setCharacterVisibilityControl, setResultRefreshSignal, setIfTypewriter, setQueryResultsDisplayVisibleControls, setCustomLargeModelReplyVisibleControl, setLargeModelReplyComponentVisibleControl, setReplyReadUnreadVisibleControl, setResponseMessageOperationVisibleControl };}, []);
  const actions = {
    // 组件replyBubbleSubContainer事件响应触发的交互入口
    eventsReplyBubbleSubContainer: useMemo(() => eventsReplyBubbleSubContainer(setter, dispatch, queryResultsDisplayVisibleControls, entity), [setter, dispatch, queryResultsDisplayVisibleControls, entity]),
  };

  // 组件replyIndividualComponent数据变化触发的交互入口：获取回复消息内容
  useEffect(() => onObtainContentOfReplyMessage(setter, dispatch, entity, index), [setter, dispatch, entity, index]);


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
    <ReplyIndividualComponentComponent 
      entity={entity}
      index={index}
      messageContent={messageContent}
      setMessageContent={setMessageContent}
      intelligentAgentNicknameVisibleControl={intelligentAgentNicknameVisibleControl}
      setIntelligentAgentNicknameVisibleControl={setIntelligentAgentNicknameVisibleControl}
      characterVisibilityControl={characterVisibilityControl}
      setCharacterVisibilityControl={setCharacterVisibilityControl}
      resultRefreshSignal={resultRefreshSignal}
      setResultRefreshSignal={setResultRefreshSignal}
      ifTypewriter={ifTypewriter}
      setIfTypewriter={setIfTypewriter}
      queryResultsDisplayVisibleControls={queryResultsDisplayVisibleControls}
      setQueryResultsDisplayVisibleControls={setQueryResultsDisplayVisibleControls}
      customLargeModelReplyVisibleControl={customLargeModelReplyVisibleControl}
      setCustomLargeModelReplyVisibleControl={setCustomLargeModelReplyVisibleControl}
      largeModelReplyComponentVisibleControl={largeModelReplyComponentVisibleControl}
      setLargeModelReplyComponentVisibleControl={setLargeModelReplyComponentVisibleControl}
      replyReadUnreadVisibleControl={replyReadUnreadVisibleControl}
      setReplyReadUnreadVisibleControl={setReplyReadUnreadVisibleControl}
      responseMessageOperationVisibleControl={responseMessageOperationVisibleControl}
      setResponseMessageOperationVisibleControl={setResponseMessageOperationVisibleControl}
      actions={actions}
    />
  );
};

export default ReplyIndividualComponentWrapper;
