import type { DefaultOptionType } from 'rc-select/lib/Select';


export type PersonnelListComponentWrapperProps =  {
  entity: any;
  index: number;
};

export type PersonnelListComponentProps = {
  entity: any;
  index: number;
  personnelList: any[];
  setPersonnelList: (personnelList: any[]) => void;
  invitePersonnelPermissionsSelectComponentOptions: DefaultOptionType[];
  setInvitePersonnelPermissionsSelectComponentOptions: (invitePersonnelPermissionsSelectComponentOptions: DefaultOptionType[]) => void;
};

