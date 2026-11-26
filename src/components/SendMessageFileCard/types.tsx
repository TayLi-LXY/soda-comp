import type { Actions } from './actions';


export type SendMessageFileCardWrapperProps =  {
  entity: any;
  index: number;
  selectAttachmentCallback: ((entity: any, index: number) => void) | undefined;
};

export type SendMessageFileCardProps = {
  actions: Actions;
  entity: any;
  index: number;
  selectAttachmentCallback: ((entity: any, index: number) => void) | undefined;
  name: string | undefined;
  setName: (name: string | undefined) => void;
  byte: string | undefined;
  setByte: (byte: string | undefined) => void;
  description: React.ReactNode | ((info: { size: string, icon: React.ReactNode, namePrefix?: string, nameSuffix?: string, name?: string, src?: string, type?: string }) => React.ReactNode);
  setDescription: (description: React.ReactNode | ((info: { size: string, icon: React.ReactNode, namePrefix?: string, nameSuffix?: string, name?: string, src?: string, type?: string }) => React.ReactNode)) => void;
  displayContentUnderCard: string | undefined;
  setDisplayContentUnderCard: (displayContentUnderCard: string | undefined) => void;
};

