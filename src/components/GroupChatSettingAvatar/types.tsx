import type { GroupMember } from '@/mocks/groupMembers';

export type GroupChatSettingAvatarWrapperProps = {
  member: GroupMember;
  selected?: boolean;
  onSelect?: (memberId: string) => void;
};

export type GroupChatSettingAvatarProps = {
  member: GroupMember;
  selected?: boolean;
  onSelect?: (memberId: string) => void;
};
