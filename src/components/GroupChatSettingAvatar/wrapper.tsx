'use client';
import React from 'react';
import type { GroupChatSettingAvatarWrapperProps } from './types';
import GroupChatSettingAvatarComponent from './index';

/**
 * 组件逻辑: 群聊设置头像
 */
const GroupChatSettingAvatarWrapper: React.FC<GroupChatSettingAvatarWrapperProps> = (props) => {
  return (
    <GroupChatSettingAvatarComponent
      member={props.member}
      selected={props.selected}
      onSelect={props.onSelect}
    />
  );
};

export default GroupChatSettingAvatarWrapper;
