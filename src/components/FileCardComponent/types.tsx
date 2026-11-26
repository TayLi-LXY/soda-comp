

export type FileCardComponentWrapperProps =  {
  name: string | undefined;
  byte: string | undefined;
  description: React.ReactNode | ((info: { size: string, icon: React.ReactNode, namePrefix?: string, nameSuffix?: string, name?: string, src?: string, type?: string }) => React.ReactNode);
};

export type FileCardComponentProps = {
  name: string | undefined;
  byte: string | undefined;
  description: React.ReactNode | ((info: { size: string, icon: React.ReactNode, namePrefix?: string, nameSuffix?: string, name?: string, src?: string, type?: string }) => React.ReactNode);
};

