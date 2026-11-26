

export type Setter = {
  // 名称设置
  setName: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 文件大小设置
  setByte: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 描述设置
  setDescription: React.Dispatch<React.SetStateAction<React.ReactNode | ((info: { size: string, icon: React.ReactNode, namePrefix?: string, nameSuffix?: string, name?: string, src?: string, type?: string }) => React.ReactNode)>>;
  // 卡片下显示内容设置
  setDisplayContentUnderCard: React.Dispatch<React.SetStateAction<string | undefined>>;
};