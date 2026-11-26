import type { DefaultOptionType } from 'rc-select/lib/Select';


export type Setter = {
  // 人员列表设置
  setPersonnelList: React.Dispatch<React.SetStateAction<any[]>>;
  // 邀请人员权限选择组件选项设置
  setInvitePersonnelPermissionsSelectComponentOptions: React.Dispatch<React.SetStateAction<DefaultOptionType[]>>;
};