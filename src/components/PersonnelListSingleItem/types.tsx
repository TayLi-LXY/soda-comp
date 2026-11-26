import type { DefaultOptionType } from 'rc-select/lib/Select';


export type PersonnelListSingleItemWrapperProps =  {
  entity: any;
  index: number;
};

export type PersonnelListSingleItemProps = {
  entity: any;
  index: number;
  personnelPermissionSelectComponentOptions: DefaultOptionType[];
  setPersonnelPermissionSelectComponentOptions: (personnelPermissionSelectComponentOptions: DefaultOptionType[]) => void;
};

