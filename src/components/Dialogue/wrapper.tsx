'use client';
import React, { useMemo, useEffect, useState, useRef } from 'react';
import type { DialogueWrapperProps } from './types';
import { eventsGroupChatSettingsButton, eventsDialogueContainerDiv0Div2Div0, eventsGroupChatSettingsDrawer, onEnterGlobalChangesInitializeInputBox, onRetrieveHistoricalChatRecordsBasedOnConversationId, onUpdateNicknameDictionaryBasedOnSenderIdList, onUpdateNewMessageEntity, onDetermineWhetherConversationCompletedBasedOnConversationId, onInitializeFileAndSchemaList } from './actions';
import type { DialogueFile } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueFile';
import { useSelector, useDispatch } from 'react-redux';
import type { LayoutState, ComponentState } from '@/models/connect';
import type { Setter } from './setter';
import DialogueComponent from './index';
import { useSearchParams } from 'next/navigation';


/**
 * 组件逻辑: 对话
 */
const DialogueWrapper: React.FC<DialogueWrapperProps> = () => {
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
  // 内部数据: 登录用户(loggedinUser)
  const loggedinUser = useSelector((state: LayoutState) => state.EmptyLayout.layout.loggedinUser);
  // 内部数据: 对话ID(conversationId)
  const searchParams = useSearchParams();
  const conversationId = searchParams.get('id') ?? "";
  // 全局数据: 对话数据模式列表(dialogueDataSchemaList)
  const dialogueDataSchemaList = useSelector((state: ComponentState) => state.Dialogue.component.dialogueDataSchemaList);
  // 全局数据: 选中的schema预览Url(previewUrlOfSelectedSchema)
  const previewUrlOfSelectedSchema = useSelector((state: ComponentState) => state.Dialogue.component.previewUrlOfSelectedSchema);
  // 内部可变数据: 对话文件列表(dialogueFileList)
  const [dialogueFileList, setDialogueFileList] = useState<DialogueFile[]>([]);
  // 全局数据: 输入全局数据(inputGlobalData)
  const inputGlobalData = useSelector((state: ComponentState) => state.Dialogue.component.inputGlobalData);
  // 内部可变数据: 对话面板宽度(dialogWidth)
  const [dialogWidth, setDialogWidth] = useState<number>(517);
  // 内部可变数据: 聊天标题内容(chatTitleContent)
  const [chatTitleContent, setChatTitleContent] = useState<string>("");
  // 可见控制数据: 对话模式切换可见控制(dialogueModeSwitchingVisibleControl)
  const [dialogueModeSwitchingVisibleControl, setDialogueModeSwitchingVisibleControl] = useState<boolean>(false);
  // 全局数据: 消息列表(messageList)
  const messageList = useSelector((state: ComponentState) => state.Dialogue.component.messageList);
  // 全局数据: 最新消息记录实体(latestNewsRecordEntity)
  const latestNewsRecordEntity = useSelector((state: ComponentState) => state.Dialogue.component.latestNewsRecordEntity);
  // 全局数据: 发送人ID列表(senderIdList)
  const senderIdList = useSelector((state: ComponentState) => state.Dialogue.component.senderIdList);
  // 全局数据: 发送人昵称字典(senderNicknameDictionary)
  const senderNicknameDictionary = useSelector((state: ComponentState) => state.Dialogue.component.senderNicknameDictionary);
  // 全局数据: 对话任务完成(dialogueTaskCompleted)
  const dialogueTaskCompleted = useSelector((state: ComponentState) => state.Dialogue.component.dialogueTaskCompleted);
  // 全局数据: 用户对话ID(userConversationId)
  const userConversationId = useSelector((state: ComponentState) => state.Dialogue.component.userConversationId);
  // 内部数据: 发送人昵称字典引用(senderNicknameDictionaryRef)
  const senderNicknameDictionaryRef = useRef(senderNicknameDictionary);
  // 列表控制数据: 聊天记录列表控制(chatRecordListControl)
  const [chatRecordListControl, setChatRecordListControl] = useState<any[]>([]);
  // 可见控制数据: 左侧对话框可见控制(leftSideDialogVisibleControl)
  const [leftSideDialogVisibleControl, setLeftSideDialogVisibleControl] = useState<boolean>(true);
  // 内部可变数据: 文本输入值(inputBoxValue)
  const [inputBoxValue, setInputBoxValue] = useState<string | undefined>(undefined);
  // 内部可变数据: 占位符(placeholder)
  const [placeholder, setPlaceholder] = useState<string | undefined>(undefined);
  // 内部可变数据: 是否禁用(disabled)
  const [disabled, setDisabled] = useState<boolean>(false);
  // 内部可变数据: 只读(readOnly)
  const [readOnly, setReadOnly] = useState<boolean>(false);
  // 内部可变数据: loading状态(loading)
  const [loading, setLoading] = useState<boolean>(false);
  // 内部可变数据: 自适应内容高度(autoSize)
  const [autoSize, setAutoSize] = useState<any>({ maxRows: 8 });
  // 内部可变数据: 文件最大个数(maxCount)
  const [maxCount, setMaxCount] = useState<number>(1);
  // 内部可变数据: 文件最大大小(maxSize)
  const [maxSize, setMaxSize] = useState<number | undefined>(undefined);
  // 内部可变数据: 群聊设置抽屉可见控制(groupChatSettingsDrawerVisible)
  const [groupChatSettingsDrawerVisible, setGroupChatSettingsDrawerVisible] = useState<boolean>(false);
  const setter: Setter = useMemo(() => { return { setDialogueFileList, setDialogWidth, setChatTitleContent, setDialogueModeSwitchingVisibleControl, setChatRecordListControl, setLeftSideDialogVisibleControl, setInputBoxValue, setPlaceholder, setDisabled, setReadOnly, setLoading, setAutoSize, setMaxCount, setMaxSize, setGroupChatSettingsDrawerVisible };}, []);
  const actions = {
    // 组件groupChatSettingsButton事件响应触发的交互入口
    eventsGroupChatSettingsButton: useMemo(() => eventsGroupChatSettingsButton(setter, dispatch, groupChatSettingsDrawerVisible), [setter, dispatch, groupChatSettingsDrawerVisible]),
    // 组件dialogueContainerDiv0Div2Div0事件响应触发的交互入口
    eventsDialogueContainerDiv0Div2Div0: useMemo(() => eventsDialogueContainerDiv0Div2Div0(setter, dispatch, loggedinUser, userConversationId, conversationId), [setter, dispatch, loggedinUser, userConversationId, conversationId]),
    // 组件groupChatSettingsDrawer事件响应触发的交互入口
    eventsGroupChatSettingsDrawer: useMemo(() => eventsGroupChatSettingsDrawer(setter, dispatch), [setter, dispatch]),
  };
  useEffect(() => { senderNicknameDictionaryRef.current = senderNicknameDictionary; }, [senderNicknameDictionary]);
  // 组件dialogueContainer数据变化触发的交互入口：输入全局变化初始化输入框
  useEffect(() => onEnterGlobalChangesInitializeInputBox(setter, dispatch, inputGlobalData), [setter, dispatch, inputGlobalData]);
  // 组件dialogueContainerDiv0Div1数据变化触发的交互入口：根据对话ID获取历史聊天记录
  useEffect(() => onRetrieveHistoricalChatRecordsBasedOnConversationId(setter, dispatch, conversationId, senderNicknameDictionaryRef, loggedinUser), [setter, dispatch, conversationId, senderNicknameDictionaryRef, loggedinUser]);
  // 组件dialogueContainerDiv0Div1数据变化触发的交互入口：根据发送人ID列表更新昵称字典
  useEffect(() => onUpdateNicknameDictionaryBasedOnSenderIdList(setter, dispatch, senderIdList, senderNicknameDictionary), [setter, dispatch, senderIdList, senderNicknameDictionary]);
  // 组件dialogueContainerDiv0Div1数据变化触发的交互入口：更新新消息实体
  useEffect(() => onUpdateNewMessageEntity(setter, dispatch, latestNewsRecordEntity, senderNicknameDictionary, conversationId), [setter, dispatch, latestNewsRecordEntity, senderNicknameDictionary, conversationId]);
  // 组件dialogueContainerDiv0Div1数据变化触发的交互入口：根据对话id判断对话是否完成
  useEffect(() => onDetermineWhetherConversationCompletedBasedOnConversationId(setter, dispatch, conversationId), [setter, dispatch, conversationId]);
  // 组件threePointComponent数据变化触发的交互入口：初始化文件和schema列表
  useEffect(() => onInitializeFileAndSchemaList(setter, dispatch, loggedinUser, conversationId), [setter, dispatch, loggedinUser, conversationId]);


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
    <DialogueComponent
      loggedinUser={loggedinUser}
      conversationId={conversationId}
      dialogueDataSchemaList={dialogueDataSchemaList}
      previewUrlOfSelectedSchema={previewUrlOfSelectedSchema}
      dialogueFileList={dialogueFileList}
      setDialogueFileList={setDialogueFileList}
      inputGlobalData={inputGlobalData}
      dialogWidth={dialogWidth}
      setDialogWidth={setDialogWidth}
      chatTitleContent={chatTitleContent}
      setChatTitleContent={setChatTitleContent}
      dialogueModeSwitchingVisibleControl={dialogueModeSwitchingVisibleControl}
      setDialogueModeSwitchingVisibleControl={setDialogueModeSwitchingVisibleControl}
      messageList={messageList}
      latestNewsRecordEntity={latestNewsRecordEntity}
      senderIdList={senderIdList}
      senderNicknameDictionary={senderNicknameDictionary}
      dialogueTaskCompleted={dialogueTaskCompleted}
      userConversationId={userConversationId}
      senderNicknameDictionaryRef={senderNicknameDictionaryRef}
      chatRecordListControl={chatRecordListControl}
      setChatRecordListControl={setChatRecordListControl}
      leftSideDialogVisibleControl={leftSideDialogVisibleControl}
      setLeftSideDialogVisibleControl={setLeftSideDialogVisibleControl}
      inputBoxValue={inputBoxValue}
      setInputBoxValue={setInputBoxValue}
      placeholder={placeholder}
      setPlaceholder={setPlaceholder}
      disabled={disabled}
      setDisabled={setDisabled}
      readOnly={readOnly}
      setReadOnly={setReadOnly}
      loading={loading}
      setLoading={setLoading}
      autoSize={autoSize}
      setAutoSize={setAutoSize}
      maxCount={maxCount}
      setMaxCount={setMaxCount}
      maxSize={maxSize}
      setMaxSize={setMaxSize}
      groupChatSettingsDrawerVisible={groupChatSettingsDrawerVisible}
      setGroupChatSettingsDrawerVisible={setGroupChatSettingsDrawerVisible}
      actions={actions}
    />
  );
};

export default DialogueWrapper;
