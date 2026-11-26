import type { Actions } from './actions';
import type { User } from '@/types/com.horsecoder.identity/sys/User';


export type MainWrapperProps =  {
};

export type MainProps = {
  actions: Actions;
  visibleControlSignalData: string | undefined;
  loggedinUser: User | undefined;
  upgradePlanVisible: boolean;
};

