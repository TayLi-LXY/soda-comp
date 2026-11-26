import type { DefaultOptionType } from 'rc-select/lib/Select';


export type Setter = {
  // 人员权限选择组件选项设置
  setPersonnelPermissionSelectComponentOptions: React.Dispatch<React.SetStateAction<DefaultOptionType[]>>;
};