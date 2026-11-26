import type { GroupMember, GroupMemberCandidate, ProjectRole } from './types';
import { DEFAULT_AVATAR, PROJECT_ROLES } from './types';

const FALLBACK_CONVERSATION_KEY = '__default__';

/**
 * 当前会话已入群种子（4 个）：够本会话搜索演示；
 * 故意空出「处理」「建模」，以便加号仍能编入候选而不立刻角色冲突。
 */
const SEED_MEMBERS: GroupMember[] = [
  {
    id: 'agent-butler',
    name: '智能体管家',
    projectRole: '编排',
    spaceRole: '执行智能体',
    originSessionId: 'session-bootstrap',
    originSessionTitle: '会话初始化',
    inUse: false,
    avatar: DEFAULT_AVATAR,
  },
  {
    id: 'agent-sql',
    name: 'SQL 专家',
    projectRole: '数据',
    spaceRole: '执行智能体',
    originSessionId: 'session-q3-sales',
    originSessionTitle: 'Q3 销售分析',
    inUse: true,
    avatar: DEFAULT_AVATAR,
  },
  {
    id: 'agent-chart-seed',
    name: '可视化专家',
    projectRole: '画图',
    spaceRole: '执行智能体',
    originSessionId: 'session-dashboard',
    originSessionTitle: '经营看板搭建',
    inUse: false,
    avatar: DEFAULT_AVATAR,
  },
  {
    id: 'agent-insight-seed',
    name: '洞察分析师',
    projectRole: '分析',
    spaceRole: '执行智能体',
    originSessionId: 'session-q3-sales',
    originSessionTitle: 'Q3 销售分析',
    inUse: false,
    avatar: DEFAULT_AVATAR,
  },
];

const SESSION_TITLE_POOL = [
  '经营看板搭建',
  'Q3 销售分析',
  '库存清洗',
  '需求预测建模',
  '投放效果复盘',
  '用户增长漏斗',
  '供应链异常排查',
  '客服质检抽样',
];

const AGENT_NAME_BY_ROLE: Record<ProjectRole, string> = {
  编排: '编排助手',
  数据: '查询专员',
  画图: '图表工匠',
  分析: '洞察 intern',
  处理: '清洗 intern',
  建模: '模型 intern',
};

/**
 * 历史会话演化出的候选 Agent 池（约 24 条，挑战档检索规模演示）
 * 已在当前会话的会在 getAvailableCandidates 中过滤
 */
function buildEvolvedAgents(): GroupMemberCandidate[] {
  const list: GroupMemberCandidate[] = [];
  let seq = 1;
  for (let round = 1; round <= 4; round += 1) {
    for (const role of PROJECT_ROLES) {
      const sessionTitle = SESSION_TITLE_POOL[(seq - 1) % SESSION_TITLE_POOL.length];
      const pad = String(seq).padStart(2, '0');
      list.push({
        id: `agent-evolved-${pad}`,
        name: `${AGENT_NAME_BY_ROLE[role]}-${pad}`,
        projectRole: role,
        spaceRole: '执行智能体',
        originSessionId: `session-evolved-${pad}`,
        originSessionTitle: sessionTitle,
        inUse: false,
        avatar: DEFAULT_AVATAR,
      });
      seq += 1;
    }
  }
  return list;
}

export const SESSION_EVOLVED_AGENTS: GroupMemberCandidate[] = buildEvolvedAgents();

const membersByConversation = new Map<string, GroupMember[]>();

/** Mock：当前操作者是否有管理权限（添加 / 移出 / 改角色） */
let operatorCanManage = true;

export function getOperatorCanManage(): boolean {
  return operatorCanManage;
}

export function setOperatorCanManage(canManage: boolean): void {
  operatorCanManage = canManage;
  if (typeof window !== 'undefined') {
    (window as Window & { __groupMemberOperatorCanManage?: boolean }).__groupMemberOperatorCanManage =
      canManage;
  }
  console.info('[groupMembers.mock] setOperatorCanManage =', canManage);
}

function resolveKey(conversationId?: string | null): string {
  return conversationId && conversationId.trim() ? conversationId : FALLBACK_CONVERSATION_KEY;
}

function cloneMembers(list: GroupMember[]): GroupMember[] {
  return list.map((m) => ({ ...m }));
}

function matchesQuery(member: GroupMember, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) {
    return true;
  }
  const haystack = [member.name, member.projectRole, member.originSessionTitle, member.spaceRole]
    .join(' ')
    .toLowerCase();
  return haystack.includes(q);
}

/** 确保该会话有一份可写成员列表 */
export function ensureConversationMembers(conversationId?: string | null): GroupMember[] {
  const key = resolveKey(conversationId);
  let list = membersByConversation.get(key);
  if (!list) {
    list = cloneMembers(SEED_MEMBERS);
    membersByConversation.set(key, list);
  }
  return list;
}

export function getMembersSnapshot(conversationId?: string | null): GroupMember[] {
  return cloneMembers(ensureConversationMembers(conversationId));
}

/** 本会话成员过滤（服务端侧）：返回 items + total + matched */
export function filterMembersSnapshot(
  conversationId: string | null | undefined,
  query = '',
): { items: GroupMember[]; total: number; matched: number } {
  const all = getMembersSnapshot(conversationId);
  const items = all.filter((m) => matchesQuery(m, query));
  return { items, total: all.length, matched: items.length };
}

export function setMembersForConversation(
  conversationId: string | null | undefined,
  next: GroupMember[],
): void {
  const key = resolveKey(conversationId);
  membersByConversation.set(key, cloneMembers(next));
}

/** 同会话内占用某项目角色的其他成员（excludeId 为改角色自身） */
export function findMemberOccupyingRole(
  conversationId: string | null | undefined,
  projectRole: string,
  excludeId?: string,
): GroupMember | undefined {
  return ensureConversationMembers(conversationId).find(
    (m) => m.projectRole === projectRole && m.id !== excludeId,
  );
}

/** 尚未加入当前会话的历史会话 Agent */
export function getAvailableCandidates(conversationId?: string | null): GroupMemberCandidate[] {
  const currentIds = new Set(ensureConversationMembers(conversationId).map((m) => m.id));
  return SESSION_EVOLVED_AGENTS.filter((c) => !currentIds.has(c.id)).map((c) => ({ ...c }));
}

/** 按名称 / 项目角色 / 来源会话标题过滤候选人 */
export function searchAvailableCandidates(
  conversationId: string | null | undefined,
  query: string,
): { items: GroupMemberCandidate[]; total: number; matched: number } {
  const all = getAvailableCandidates(conversationId);
  const items = all.filter((c) => matchesQuery(c, query));
  return { items, total: all.length, matched: items.length };
}

/** 测试 / 演示用：清空某会话数据，下次访问重新灌种子 */
export function resetConversationMembers(conversationId?: string | null): void {
  membersByConversation.delete(resolveKey(conversationId));
}
