import type { Actions } from './actions';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { DialogueFile } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueFile';
import type { SchemaEntity } from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaList/types/SchemaEntity';
import type { GroupMember, GroupMemberCandidate } from '@/mocks/groupMembers';

export type ThreePointComponentWrapperProps = {
  loggedinUser: User | undefined;
  conversationId: string | undefined;
  dialogueFileList: DialogueFile[];
  dialogueDataSchemaList: SchemaEntity[];
  previewUrlOfSelectedSchema: string | undefined;
};

export type ThreePointComponentProps = {
  actions: Actions;
  loggedinUser: User | undefined;
  conversationId: string | undefined;
  dialogueFileList: DialogueFile[];
  dialogueDataSchemaList: SchemaEntity[];
  previewUrlOfSelectedSchema: string | undefined;
  /** 抽屉顶栏过滤后展示的本会话 Agent */
  displayedMembers: GroupMember[];
  memberFilterQuery: string;
  /** 本会话搜索：匹配 n / 共 m */
  memberMatched: number;
  memberTotal: number;
  selectedIds: string[];
  loading: boolean;
  addModalOpen: boolean;
  candidates: GroupMemberCandidate[];
  candidateQuery: string;
  candidateSelectedIds: string[];
  /** 加号检索：匹配 n / 共 m（m 为当前可添加池） */
  candidateMatched: number;
  candidateTotal: number;
  /** 打开 Modal 时是否曾有过可添加候选人（用于区分空态文案） */
  candidatePoolExhausted: boolean;
  serverSnapshotVisible: boolean;
  serverSnapshotJson: string;
  /** 仅选中 1 个时可改角色 */
  roleEditorVisible: boolean;
  roleEditorMemberName: string;
  roleDraft: string;
  projectRoleOptions: { label: string; value: string }[];
  onMemberFilterChange: (query: string) => void;
  onToggleMemberSelect: (memberId: string) => void;
  onOpenAddModal: () => void;
  onCloseAddModal: () => void;
  onCandidateQueryChange: (query: string) => void;
  onToggleCandidateSelect: (candidateId: string) => void;
  onConfirmAdd: () => void;
  onRemoveSelected: () => void;
  onToggleServerSnapshot: () => void;
  onRoleDraftChange: (role: string) => void;
  onSaveRole: () => void;
};
