/**
 * 群成员 = 当前会话协作名单里的 Agent（不做邀请真人）
 */
export type GroupMember = {
  id: string;
  name: string;
  /** 项目角色，如 编排 / 数据 / 画图 */
  projectRole: string;
  /** 空间角色，如 执行智能体 */
  spaceRole: string;
  /** 来源历史会话 ID（Mock） */
  originSessionId: string;
  /** 来源历史会话标题，用于展示「来自会话：xxx」 */
  originSessionTitle: string;
  /** 是否正在被当前会话任务使用（移出需确认） */
  inUse: boolean;
  avatar?: string;
};

/** 可从历史会话检索并编入当前会话的 Agent */
export type GroupMemberCandidate = GroupMember;

export type MockFailureMode = 'add' | 'remove' | null;

export type MockErrorCode =
  | 'GENERIC_FAILURE'
  | 'ROLE_CONFLICT'
  | 'PERMISSION_DENIED'
  | 'AGENT_IN_USE'
  | 'ALREADY_MEMBER'
  | 'NOT_FOUND';

export type MockApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: { code: MockErrorCode; message: string } };

export type RemoveMemberOptions = {
  /** 用户已确认移出「使用中」的 Agent */
  confirmed?: boolean;
};

/** 列表/搜索带回总数，便于「匹配 n / 共 m」 */
export type SearchListResult<T> = {
  items: T[];
  /** 过滤前全集大小 */
  total: number;
  /** 过滤后条数 */
  matched: number;
};

/** 产品已有项目角色文案，勿自造 */
export const PROJECT_ROLES = ['编排', '数据', '画图', '分析', '处理', '建模'] as const;

export type ProjectRole = (typeof PROJECT_ROLES)[number];

export const DEFAULT_AVATAR =
  'https://beta.horsecoder.com/remote-storage/api/sys/storage/file/preview?fileName=MkE3QzdDQkMxRkExQTc4NjU0MTlFMkM5NTRGNUYxMkUucG5n&user=prod';
