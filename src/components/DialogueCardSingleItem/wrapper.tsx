'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { DialogueCardSingleItemWrapperProps } from './types';
import { eventsDialogueCardSingleItemDiv, onInitializeAvatarImage, onInitializePackageSelected, onInitializeRecentMessageTimePrompt, onInitializeLatestMessageAbbreviation } from './actions';
import type { Setter } from './setter';
import DialogueCardSingleItemComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 对话卡片单项
 */
const DialogueCardSingleItemWrapper: React.FC<DialogueCardSingleItemWrapperProps> = (props) => {
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
  // 内部数据: 对话卡片列表单项(entity)
  const { entity } = props;
  // 内部数据: 索引(index)
  const { index } = props;
  // 内部数据: 选中对话回调(selectDialogueCallback)
  const { selectDialogueCallback } = props;
  // 套装控制数据: 对话卡片选中变化套装数据(selectChangePackageDataInDialogueCard)
  const [selectChangePackageDataInDialogueCard, setSelectChangePackageDataInDialogueCard] = useState<string | undefined>('dialogueCardWithNoBackgroundColorSelected');
  // 内部可变数据: 头像url(avatarUrl)
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  // 内部可变数据: 对话卡片时间显示(dialogueCardTimeDisplay)
  const [dialogueCardTimeDisplay, setDialogueCardTimeDisplay] = useState<string>("");
  // 内部可变数据: 最近一条消息缩略(recentMessageAbbreviation)
  const [recentMessageAbbreviation, setRecentMessageAbbreviation] = useState<string | undefined>(undefined);
  const setter: Setter = useMemo(() => { return { setSelectChangePackageDataInDialogueCard, setAvatarUrl, setDialogueCardTimeDisplay, setRecentMessageAbbreviation };}, []);
  const actions = {
    // 组件dialogueCardSingleItemDiv事件响应触发的交互入口
    eventsDialogueCardSingleItemDiv: useMemo(() => eventsDialogueCardSingleItemDiv(setter, dispatch, selectDialogueCallback, index, entity), [setter, dispatch, selectDialogueCallback, index, entity]),
  };

  // 组件dialogueCardSingleItemDiv数据变化触发的交互入口：初始化头像图片
  useEffect(() => onInitializeAvatarImage(setter, dispatch, entity), [setter, dispatch, entity]);
  // 组件dialogueCardSingleItemDiv数据变化触发的交互入口：初始化是否选中套装
  useEffect(() => onInitializePackageSelected(setter, dispatch, entity), [setter, dispatch, entity]);
  // 组件timeInformation数据变化触发的交互入口：初始化最近消息时间提示
  useEffect(() => onInitializeRecentMessageTimePrompt(setter, dispatch, entity), [setter, dispatch, entity]);
  // 组件recentMessageAbbreviationParagraph数据变化触发的交互入口：初始化最新一条消息缩略
  useEffect(() => onInitializeLatestMessageAbbreviation(setter, dispatch, entity), [setter, dispatch, entity]);


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
    <DialogueCardSingleItemComponent 
      entity={entity}
      index={index}
      selectDialogueCallback={selectDialogueCallback}
      selectChangePackageDataInDialogueCard={selectChangePackageDataInDialogueCard}
      setSelectChangePackageDataInDialogueCard={setSelectChangePackageDataInDialogueCard}
      avatarUrl={avatarUrl}
      setAvatarUrl={setAvatarUrl}
      dialogueCardTimeDisplay={dialogueCardTimeDisplay}
      setDialogueCardTimeDisplay={setDialogueCardTimeDisplay}
      recentMessageAbbreviation={recentMessageAbbreviation}
      setRecentMessageAbbreviation={setRecentMessageAbbreviation}
      actions={actions}
    />
  );
};

export default DialogueCardSingleItemWrapper;
